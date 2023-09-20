/* OUR PARTNERS
- data received: The patners in form of array ( to pass data )
- this is a section that displays clothing patners
*/

const Patners = ({ parner_data }) => {
  return (
    <>
      <div className="our-partners">
        {/* heading */}
        <h3 className="section-header">OUR PARTNERS</h3>
        {/* cards */}
        <div className="card-wrapper">
          {/* card - 1 */}
          <div className="rounded card">
            <div className="image">
              <img src="" alt="nike" />
            </div>
            <div className="content">
              <p className="bold">Nike</p>
            </div>
          </div>

          {/* card - 1 */}
          <div className="rounded card">
            <div className="image">
              <img src="" alt="nike" />
            </div>
            <div className="content">
              <p className="bold">Nike</p>
            </div>
          </div>

          {/* card - 1 */}
          <div className="rounded card">
            <div className="image">
              <img src="" alt="nike" />
            </div>
            <div className="content">
              <p className="bold">Nike</p>
            </div>
          </div>

          {/* card - 1 */}
          <div className="rounded card">
            <div className="image">
              <img src="" alt="nike" />
            </div>
            <div className="content">
              <p className="bold">Nike</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patners;
