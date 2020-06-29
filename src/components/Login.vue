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
    <button @click="goToUserForm" class="form__button_go_user_form">Login</button>
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
      const { isValidEmail, email, isMinStringEmail } = this;
      return isValidEmail(email) && isMinStringEmail(email);
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
    isMinStringEmail(string) {
      return string.length > 6;
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
</style>
