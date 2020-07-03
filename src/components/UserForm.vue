<template>
  <div>
    <h1>UserForm</h1>
    <p v-show="!isEmailOk" class="form__p_error_message">
      Note: enter a valid email (e.g.: email_1@gmail.com to email_100@gmail.com)
    </p>
    <p v-show="!isAgeOk" class="form__p_error_message">
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
        value="localStorage.getItem(email)"
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
      <select v-model="os" class="form__select_os" name="formOs">
        <option disabled value="">Chose a item</option>
        <option v-for="item in items" :key="item.value">{{ item.value }}</option> </select
      ><br />
    </div>
    <p v-show="isFormCompleted" class="form__p_success_message">
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
    items: [{ value: 'Linux' }, { value: 'Windows' }],
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
      const { isValidOs, os } = this;
      return isValidOs(os);
    },
    isFormCompleted() {
      const { isValidEmail, email } = this;
      const { isValidAge, age } = this;
      const { isValidOs, os } = this;
      return isValidEmail(email) && isValidAge(age) && isValidOs(os);
    },
  },

  methods: {
    minLength(string) {
      return string.length > 0;
    },
    isValidEmail(string) {
      // const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // https://www.w3resource.com/javascript/form/email-validation.php
      const emailRegex = /(?<![\w\d])email_([1-9]{1,2}[0]?|100)(?![\w\d]+?<![\w\d])@gmail.com(?![\w\d])/; // https://regex101.com/r/I9Nwbh/1
      return !!string.match(emailRegex);
    },
    isValidAge(number) {
      return !(number < 18 || number > 99);
    },
    isValidOs(string) {
      return !(string === '');
    },
  },

  mounted() {
    if (localStorage.email) {
      this.email = localStorage.email;
    }
  },

  watch: {
    email(newEmail) {
      localStorage.email = newEmail;
    },
  },
};
</script>

<style>
.form__select_option_disabled {
  color: rgb(255, 0, 0);
}
</style>
