
const Login = () => {
  return (
    <>
      <form className="col-7">
        <h2 className="text-center py-3">Log In</h2>
        <div className="row justify-content-center">
          <div className="col-8">
            <label htmlFor="usernamelog">Username</label>
            <input
              type="text"
              className="nombre form-control"
              id="usernamelog"
              placeholder="Username"
              required
            />
          </div>
          <div className="col-8">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="nombre form-control"
              id="password"
              placeholder="pon tu password"
              required
            />
           
          </div>

          <div className="col-8">
            <input
              type="checkbox"
              className="checkbox-password nombre"
              id="repeat-passwordlog"
              placeholder="123456789"
              required
            />
            <label className="px-2" htmlFor="repeat-passwordlog">
              Remember password
            </label>
          </div>
          <div className="row">
            <div className="col text-left">
              <button className="btn btn-contiune">ATRAS</button>
            </div>
            <div className="col text-right">
              <button className="btn btn-contiune">ADELANTE</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;