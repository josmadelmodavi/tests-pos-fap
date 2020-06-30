<template>
  <div>
    <h1>Login</h1>
    <p v-show="!isEmailOk" class="form__p_error_message">
      Note: enter a valid email
    </p>
    <p v-show="!isPasswordError" class="form__p_error_message">
      Note: enter a password longer than 6 characters
    </p>
    <!-- <p v-show="isInvalidAccount" class="form__p_error_message">
      Error: This account does not exist</p> -->
    <div>
      <label>Email:</label><br />
      <input
        v-model="email"
        class="form__input_email"
        type="email"
        name="formEmail"
        autofocus="autofocus"
        placeholder="mail@example.com"
      /><br /><br />
    </div>
    <div>
      <label>Password:</label><br />
      <input
        v-model="password"
        class="form__input_password"
        type="password"
        name="formPassword"
        placeholder="Enter password"
      /><br /><br />
    </div>
    <button v-show="isLoginCompleted" @click="goToUserForm" class="form__button_go_user_form">
      Login
    </button>
    <button v-show="!isLoginCompleted" class="form__button_disabled" disabled>
      Login
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
  }),

  computed: {
    isEmailOk() {
      const { isValidEmail, email } = this;
      return isValidEmail(email);
    },
    isPasswordError() {
      const { isValidPassword, password } = this;
      return isValidPassword(password);
    },
    isLoginCompleted() {
      const { isValidEmail } = this;
      const { isValidPassword } = this;
      return isValidEmail(this.email) && isValidPassword(this.password);
    },
  },

  methods: {
    isValidEmail(string) {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // https://www.w3resource.com/javascript/form/email-validation.php
      return !!string.match(emailRegex);
    },
    isValidPassword(string) {
      return string.length >= 6;
    },
    goToUserForm() {
      this.$router.push({ name: 'UserForm' });
    },
  },
};
</script>

<style>
.form__p_error_message,
.form__p_error_message {
  color: dimgrey;
}
.form__input_email,
.form__input_password,
.form__input_age,
.form__select_os {
  width: 250px;
  height: 30px;
  font-size: 1.1em;
}
.form__select_os {
  width: 258px;
  height: 34px;
}
.form__button_go_user_form,
.form__button_disabled {
  width: 258px;
  height: 30px;
  font-size: 1.1em;
  background-color: mediumseagreen;
  color: white;
  border: 2px solid seagreen;
  border-radius: 3px;
  transition: filter 0.2s, background-color 0.2s;
}
.form__button_go_user_form:hover,
.form__button_go_user_form:focus {
  filter: brightness(90%);
  background-color: seagreen;
}
.form__button_disabled {
  background-color: slategray;
  border: none;
}
.form__p_success_message {
  color: green;
  font-size: 1.2em;
  animation: flash 1s linear infinite;
}
@keyframes flash {
  50% { opacity: 0; }
}
</style>
