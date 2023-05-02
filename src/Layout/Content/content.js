

const Content = (props) => {
  const { Products } = props;
  console.log(Products);
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        {Products.map((product) => {
          return(
            <div className="col-lg-4 pt-3">
              <div className="card mb-5 ">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    {product.package}
                  </h5>
                  <h2 className="card-price text-center">
                    {product.price}<span className="period">/month</span>
                  </h2>
                  <hr></hr>
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Single User
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      5GB Storage
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Public Projects
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Community Access
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-check"></i>
                      </span>
                      Unlimited Private Projects
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Dedicated Phone Support
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Free Subdomain
                    </li>
                    <li className="text-muted">
                      <span className="fa-li">
                        <i className="fas fa-times"></i>
                      </span>
                      Monthly Status Report
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="/" className="btn btn-primary text-uppercase">
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  );
};

export default Content;
