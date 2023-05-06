import React,{useState} from 'react'
import './Forms.css'
// import { useNavigate, NavigateFunction } from 'react-router-dom';

const SignUp = () => {

    interface Values {
        email: string;
        password: string;
      }
      
      const [values, setValues] = useState<Values>({
        email: "",
        password: "",
      });

      const inputs = [
        {
          id: 1,
          name: "email",
          placeholder: "E-mail",
          type: "email",
          required: true,
          errMsg: "Must be a valid e-mail",
          pattern: /^\S+@\S+$/,
        },
        {
          id: 2,
          name: "password",
          placeholder: "Password",
          type: "password",
          required: true,
          errMsg:
            "Must be at least 8 characters. Must have a capital letter, a number, a special character and small letters",
          pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        },
      ];
      
      type Input = {
        id: number;
        name: string;
        placeholder: string;
        type: string;
        required: boolean;
        errMsg: string;
        pattern: RegExp;
      };

      type DocFormProps = Input & {
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        values: string;
        setView: (view: string) => void;
        view: string;
      };


  return (
    <div>
          <div className="DocLog">
      <div className="DocSignWrap">
        <>
          <form className="log-form" >
            <h1>Log Into your account</h1>
            <p>Create your access to your account to continue your journey!</p>
            {/* {inputs.map((i) => (
              <div key={i.id}>
                <DocForm
                  {...i}
                  handleChange={handleChange}
                  values={values[i.name]}
                  setView={setView}
                  view={view}
                />
              </div>
            ))} */}

            <input type="text" className="inp" id="" />
            <input type="text" className="inp" id="" />

            <div className="log-foot">
              <>
                <button className="log-foot-button">LOG IN</button>
              </>
              <p>Forgot Password? <span>Click Here</span> </p>
            </div>
          </form>
        </>
        <div className="login-motivation">
          <div className="log-motiv-head">
            <img src="/logo.png"  alt="" />
          </div>
          <div className="log-mot-text">
            <h3>Already Signed up?</h3>
            <p>
              “Wherever the art of medicine is loved, <br /> there is also a
              love for humanity.” .
            </p>
            <button
             
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp