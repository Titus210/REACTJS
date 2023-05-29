const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const store = require("nedb");

const app = express();
const expenses = new store({ filename: "expense.db", autoload: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log(`Server is running on port ${HTTP_PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.get("/api/expense", (req, res) => {
  expenses.find({}, (err, docs) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(docs);
    }
  });
});

app.get("/api/expense/:id", (req, res) => {
  const id = req.params.id;
  expenses.find({ _id: id }, (err, docs) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(docs);
    }
  });
});

app.post("/api/expense", (req, res) => {
  const { name, amount, category, spend_date } = req.body;
  if (!name || !amount || !category || !spend_date) {
    res.status(400).json({ error: "Missing required fields" });
  } else {
    const data = {
      name,
      amount,
      category,
      spend_date,
    };
    expenses.insert(data, (err, doc) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.json(doc);
      }
    });
  }
});

app.put("/api/expense/:id", (req, res) => {
  const id = req.params.id;
  const { name, amount, category, spend_date } = req.body;
  if (!name || !amount || !category || !spend_date) {
    res.status(400).json({ error: "Missing required fields" });
  } else {
    const data = {
      name,
      amount,
      category,
      spend_date,
    };
    expenses.update({ _id: id }, data, (err, numReplaced) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        if (numReplaced === 0) {
          res.status(404).json({ error: "Expense not found" });
        } else {
          res.json(data);
        }
      }
    });
  }
});

app.delete("/api/expense/:id", (req, res) => {
  const id = req.params.id;
  expenses.remove({ _id: id }, (err, numDeleted) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (numDeleted === 0) {
        res.status(404).json({ error: "Expense not found" });
      } else {
        res.json({ message: "Expense deleted" });
      }
    }
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});
