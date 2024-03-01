import "./Testride.css";
import { useState } from "react";
import axios from "axios";


function Testride() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bike, setBike] = useState("");
  //   const [nameError, setNameError] = useState("");
  //   const [emailError, setEmailError] = useState("");
  //   const [genderError, setGenderError] = useState("");
  //   const [countryError, setCountryError] = useState("");
  //   const [bikeError, setBikeError] = useState("");



  async function postp(e){
    e.preventdefault;
    try{
    const data = await axios ({
      method : "post",
      url:"http://localhost:5002/posting",
      data: {FormData:FormData  }
  
    });
    console.log(data);
  }
  catch (err){
    console.log(err);
  }
  }
  
  const [FormData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    country: "",
    bike: "",
  });
  const [formError, setFormError] = useState({
    nameError: "",
    genderError: "",
    emailError: "",
    countryError: "",
    bikeError: "",
  });

  function onClick(e) {
    e.preventDefault();
    setFormError({
      nameError: "",
      genderError: "",
      emailError: "",
      countryError: "",
      bikeError: "",
    });

    if (!FormData.name) {
      setFormError((state) => {
        return { ...state, nameError: "Sorry mate it's a Name  Error" };
      });
    }
    if (!FormData.gender) {
      setFormError((state) => {
        return { ...state, genderError: " Hey select one of the above gender" };
      });
    }
    if (!FormData.email) {
      setFormError((state) => {
        return { ...state, emailError: " Enter valid email" };
      });
    }
    if (!FormData.country) {
      setFormError((state) => {
        return { ...state, countryError: " Please select a country" };
      });
    }
    if (!FormData.bike) {
      setFormError((state) => {
        return { ...state, bikeError: " Want a ride? Choose any one" };
      });
    }
  }

  console.log(FormData);
  return (
    <div className="testride-content">
      <div className="testride-title">
        <h1>Wanna ride your dream?</h1>
        <h4>
          <b>Fill the form below:</b>
        </h4>
      </div>
      <div className="form">
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              placeholder="enter your name"
              onChange={(e) => {
                setFormData({ ...FormData, name: e.target.value });
              }}
              value={FormData.name}
            />
            <span className="error">{formError.nameError}</span>
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              placeholder="enter your email"
              onChange={(e) => {
                setFormData({ ...FormData, email: e.target.value });
              }}
              value={FormData.email}
            />
            <span className="error">{formError.emailError}</span>
          </label>

          <div className="test-3contents">
            <label htmlFor="gender">
              Gender:
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => {
                  setFormData({ ...FormData, gender: e.target.value });
                }}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => {
                  setFormData({ ...FormData, gender: e.target.value });
                }}
              />
              Female
            </label>
            <span className="error">{formError.genderError}</span>

            <label htmlFor="country">
              Country:
              <select
                onChange={(e) => {
                  setFormData({ ...FormData, country: e.target.value });
                }}
                value={FormData.country}
              >
                <option value="">Select...</option>
                <option value="nepal">Nepal</option>
                <option value="aus">Australia</option>
                <option value="china">China</option>
                <option value="others">Others</option>
              </select>
              <span className="error">{formError.countryError}</span>
            </label>
            <label htmlFor="bike">
              Bike to ride?
              <select
                id="bike"
                onChange={(e) => {
                  setFormData({ ...FormData, bike: e.target.value });
                }}
                value={FormData.bike}
              >
                <option value="">select....</option>
                <option value="dirt">Dirt</option>
                <option value="motard">Motard</option>
                <option value="sports">Sports</option>
                <option value="naked">Naked</option>
              </select>
              <span className="error">{formError.bikeError}</span>
            </label>
          </div>
          <button
            onClick={postp}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Testride;
