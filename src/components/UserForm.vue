<template>
  <div>
    <h1>UserForm</h1>
    <p v-show="!isEmailOk" class="form__p_error_message">
      Note: enter a valid email
    </p>
    <p v-show="isAgeOk" class="form__p_error_message">
      Note: enter an age between 18 and 99 years
    </p>
    <p v-show="!isOsOk" class="form__p_error_message">
      Note: choose the OS
    </p>
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
      <label>Age:</label><br />
      <input
        v-model="age"
        class="form__input_age"
        type="number"
        name="formAge"
        min="18"
        max="99"
        placeholder="Enter your age"
      /><br /><br />
    </div>
    <div>
      <label>OS:</label><br />
      <select v-model="os" class="form__select_os">
        <option disabled value="">Chose a item</option>
        <option>Linux</option>
        <option>Windows</option> </select
      ><br />
    </div>
    <p v-show="!isFormCompleted" class="form__p_success_message">
      Congratulations!
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    age: '',
    os: '',
  }),

  computed: {
    isEmailOk() {
      const { isValidEmail, email, minLength } = this;
      return isValidEmail(email) && minLength(email);
    },
    isAgeOk() {
      const { isValidAge, age } = this;
      return isValidAge(age);
    },
    isOsOk() {
      const { isValidEmail } = this;
      const { isValidPassword } = this;
      return isValidEmail(this.email) && isValidPassword(this.password);
    },
  },

  methods: {
    minLength(string) {
      return string.length > 0;
    },
    isValidEmail(string) {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // https://www.w3resource.com/javascript/form/email-validation.php
      return !!string.match(emailRegex);
    },
    isValidAge(age) {
      return age < 17 || age > 99;
    },
  },
};
</script>

<style></style>
