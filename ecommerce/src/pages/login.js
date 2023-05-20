import React from 'react'

function Login() {
  return (
    <>
    <section class="h-100 gradient-form" >
    <div class="justify-content-center">
      <div class="align-items center col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                    <h4 class="mt-1 mb-5 pb-1">We are The NWG Team</h4>
                </div>

                <form>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" />
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Login</button>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <button class="btn btn-danger"><a href="/register" class="nav-link font-italic">Create New</a></button>
                  </div>

                </form>

              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
</section>
    </>
  )
}

export default Login