<template>
  <main>
    <div class="layout">
      <!-- Start of Sign Up -->
      <div class="main order-md-2">
        <div class="start">
          <div class="container">
            <div class="col-md-12">
              <div class="content">
                <h1>Create Account</h1>
                <form class="signup">
                  <div class="form-parent">
                    <div class="form-group">
                      <input
                        type="text"
                        id="inputName"
                        class="form-control"
                        placeholder="Username"
                        required
                      />
                      <button class="btn icon">
                        <i class="material-icons">person_outline</i>
                      </button>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="inputEmail"
                        class="form-control"
                        placeholder="Email Address"
                        required
                      />
                      <button class="btn icon">
                        <i class="material-icons">mail_outline</i>
                      </button>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <button class="btn icon">
                      <i class="material-icons">lock_outline</i>
                    </button>
                  </div>
                  <router-link to="/signin" class="btn button">
                    Sign Up
                  </router-link>

                  <div class="callout">
                    <span
                      >Already a member?
                      <a href="sign-in.html">Sign In</a></span
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Sign Up -->
      <!-- Start of Sidebar -->
      <div class="aside order-md-1">
        <div class="container">
          <div class="col-md-12">
            <div class="preference">
              <h2>Welcome Back!</h2>
              <p>
                To keep connected with your friends please login with your
                personal info.
              </p>
              <router-link to="/signin" class="btn button">
                Sign In
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Sidebar -->
    </div>
    <!-- Layout -->
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const SignUpComponent = defineComponent({
  name: "signupcomponent",
});

export default SignUpComponent;
</script>
