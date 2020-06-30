<template>
  <div>
    <h1>UserForm</h1>
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
        <option>Windows</option>
      </select><br />
    </div>
    <p v-show="!isFormCompleted" class="form__p_success_message">
      Congratulations!
    </p>
  </div>
</template>

<script></script>

<style></style>
