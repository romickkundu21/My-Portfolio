import React,{useState} from 'react';
import Typical from 'react-typical';
import axios from 'axios';
import {toast} from 'react-toastify'
// import { Icon } from '@iconify/react';
import imgBack from "../../assets/images/it.png";
import load1 from "../../assets/images/load.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";
import Footer from '../Footer/Footer';
import Footer1 from '../Footer1';

export default function ContactMe(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [banner,setBanner]=useState("");
    const [bool,setBool]=useState(false);

    const handleName=(e)=>{
        setName(e.target.value);
    };
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    };
    const handleMessage=(e)=>{
        setMessage(e.target.value);
    };

    const submitForm=async(e)=>{
        e.preventDefault();
        try{
            let data={
                name,
                email,
                message,
            };
            setBool(true);
            const res=await axios.post('/contact',data);
            if(name.length===0 || email.length===0 || message.length===0){
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            }else if(res.status===200){
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        }catch(error){

        }
    
    };

    return (
        <div className="main-container fade-In" id={props.id || ""}>
            <ScreenHeading
                subHeading={"Let's keep in Touch"}
                title={"Contact Me"}
            />
            <div className="central-form">
                <div className="col">
                    <h2 className="title">
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Email and Message me",
                                1200,
                                "Get In Touch 📧",
                                1200,
                            ]}
                        />
                    </h2>
                    <a href='https://www.facebook.com/profile.php?id=100009033430915'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.instagram.com/romick_21/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/romick-kundu-725437207/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://twitter.com/kundu_romick'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <img src={imgBack} alt="not found" />
                        <h4 className="h">Have a good day ahead!</h4>
                    </div>
                    <form  onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        onChange={handleName}
                        value={name} className="InpName"
                        />
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        onChange={handleEmail}
                        value={email}
                        />
                        <label htmlFor="message">Message</label>
                        <textarea type="text" 
                        onChange={handleMessage}
                        value={message} style={{height: "150px"}}
                        />
                        
                        <div className="send-btn">
                            <button type='submit'>
                            Send 
                            <i className="fa fa-paper-plane"/>
                            {bool?(<b className="load">
                                <img src={load1} alt="not responding" />
                            </b>):("")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <Footer/> */}
            <Footer1/>
        </div>
    )
}
