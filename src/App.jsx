import Header from "./component/Header"
import Hero from "./component/Hero"
import About from "./component/About"
import Service from "./component/Service"
import Project from "./component/Project"
import Footer from "./component/Footer"

const App = () =>{
  return(
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Footer/>
    </div>
  );
};
export default App;

/*
<template>
  <div>
    <h1>Admission Form</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Full Name:</label>
      <input type="text" id="name" v-model="formData.name" required><br><br>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required><br><br>
      
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" v-model="formData.dob" required><br><br>
      
      <label for="gender">Gender:</label>
      <input type="radio" id="male" value="Male" v-model="formData.gender"> Male
      <input type="radio" id="female" value="Female" v-model="formData.gender"> Female
      <input type="radio" id="other" value="Other" v-model="formData.gender"> Other<br><br>
      
      <label for="program">Program of Interest:</label>
      <select id="program" v-model="formData.program" required>
          <option value="Computer Science">Computer Science</option>
          <option value="Business Administration">Business Administration</option>
          <option value="Engineering">Engineering</option>
      </select><br><br>
      
      <label for="comments">Additional Comments:</label><br>
      <textarea id="comments" v-model="formData.comments" rows="4" cols="50"></textarea><br><br>
      
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        dob: '',
        gender: '',
        program: 'Computer Science',
        comments: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Here, you can send the form data to a server or perform any other action
      console.log('Form data:', this.formData);
    },
  },
};
</script>

*/