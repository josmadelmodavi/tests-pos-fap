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
      /><br /><br />
    </div>
    <div>
      <label>Age:</label><br />
      <input v-model="age" class="form__input_age" type="text" name="formAge" /><br /><br />
    </div>
    <div>
      <label>OS:</label><br />
      <select v-model="os">
        <option disabled value="">Chose</option>
        <option>Windows</option>
        <option>Linux</option>
      </select>
      <input v-model="os" class="form__input_age" type="text" name="formAge" /><br /><br />
    </div>
    <button @click="goToUserForm" class="form__button_go_user_form">Login</button>
  </div>
</template>

<script>

</script>

<style>

</style>
