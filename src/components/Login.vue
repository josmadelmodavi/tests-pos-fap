<template>
  <div>
    <h1>Login</h1>
    <!-- <p v-show="isEmailInvalid" class="form__p_error_message">
      Error: Email {{fullname}} is not valid</p> -->
    <!-- <p v-show="isPasswordInvalid" class="form__p_error_message">
      Error: Password is less than 6 characters</p> -->
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
      /><br /><br />
    </div>
    <div>
      <label>Password:</label><br />
      <input
        v-model="password"
        class="form__input_password"
        type="password"
        name="formPassword"
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
    isLoginCompleted() {
      const { isValidEmail, isValidPassword } = this;
      return isValidEmail(this.email) && isValidPassword(this.password);
    },
  },

  methods: {
    isValidEmail(string) {
      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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

</style>
