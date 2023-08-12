import React from "react";
import "./Contact.css";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BiLogoInstagram} from "react-icons/bi";
import {TfiYoutube} from "react-icons/tfi";
import {BsLinkedin} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";

const Contact = () => {

    return (
        <> {" "}
            <div className="contact-contact contact">
                {" "}
                <div className="contact-one">
                    {" "}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.520059327184!2d77.23041318818768!3d28.655825490026412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce274e3e18f%3A0x40209eb01fb00526!2sLal%20Qila%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1690482381555!5m2!1sen!2sin"
                        /*  width="50%"
            height="300" */
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="new-delhi"
                        className="map"
                    >
                        {" "} </iframe>
                </div>
                {" "}

                <div className="contact-two">
                    {" "}
                    <span> {" "}
                        <IoLocationSharp style={
                            {
                                color: "white",
                                height: "40px",
                                width: "40px",
                                marginLeft: "50px",
                                marginTop: "60px",
                            }
                        }/>{" "}
                        <h1 className="contact-heading">
                            METATECH IT SOLUTIONS
                        </h1>
                        <address>
                            <span style={
                                {
                                    color: "white",
                                    fontSize: "21px",
                                    marginLeft: "130px",
                                }
                            }>
                                Registered Address :
                            </span>
                            {" "}
                            <span style={
                                {
                                    color: "white",
                                    fontSize: "19px",
                                }
                            }>
                                {" "}
                                Block A, 2 nd Floor
                                <br/>{" "}
                                <span style={
                                    {
                                        color: "white",
                                        fontSize: "21px",
                                        marginLeft: "130px",
                                    }
                                }>
                                    {" "}
                                    Plot No.11, 12, 16, 17{" "} </span>
                                <br/>{" "}
                                <span style={
                                    {
                                        color: "white",
                                        fontSize: "21px",
                                        marginLeft: "130px",
                                    }
                                }>
                                    {" "}
                                    Palam Extension, Sector 7 Dwarka,{" "} </span>
                                <br></br>
                                {" "}
                                <span style={
                                    {
                                        color: "white",
                                        fontSize: "21px",
                                        marginLeft: "130px",
                                    }
                                }>
                                    {" "}
                                    Dwarka, Delhi, 110075{" "} </span>
                                <br></br>
                                {" "}
                                <span style={
                                    {
                                        color: "white",
                                        fontSize: "21px",
                                        marginLeft: "130px",
                                    }
                                }>
                                    {" "}
                                    Phone : 9871031780{" "} </span>
                            </span>
                            {" "} </address>
                        {" "} </span>
                    <div>
                        <div style={
                            {
                                display: "flex",
                                alignItems: "center",
                            }
                        }>
                            <div style={
                                {
                                    color: "#fff",
                                    fontSize: "50px",
                                    marginLeft: "50px",
                                }
                            }>
                                @
                            </div>
                            {" "}
                            <div style={
                                {
                                    color: "#fff",
                                    fontFamily: "Domain",
                                    fontSize: "30px",
                                    marginLeft: "36px",
                                }
                            }>
                                {" "}
                                Email Addresses{" "} </div>
                        </div>
                        {" "}
                        <div style={
                            {
                                color: "white",
                                fontSize: "20px",
                                marginLeft: "134px",
                            }
                        }>
                            {" "}
                            metatechitsolutions@gmail.com
                        </div>
                        {" "}
                        <button style={
                            {
                                fontSize: "15px",
                                fontWeight: "700",
                                color: "white",
                                backgroundColor: "#FF8000",
                                height: "50px",
                                width: "130px",
                                border: "1px solid black",
                                borderRadius: "5px",
                                marginTop: "20px",
                                marginLeft: "155px",
                            }
                        }>
                            {" "}
                            About CSR{" "} </button>
                    </div>
                    {" "} </div>
                {" "}


                <div className="contact-three">
                    {" "}
                    <div> {" "}
                        <p>
                            METATECH IT SOLUTIONS
                        </p>
                    </div>
                    {" "}
                    <div className="icons">
                        {" "}
                        <div className="facebook">
                            {" "}
                            <a href="https://www.facebook.com/ThePoliticalPartners/">
                                {" "}
                                <BsFacebook color="blue"
                                    style={
                                        {
                                            height: "50px",
                                            width: "50px",
                                            color: "white",
                                            padding: "10px 4px",
                                            backgroundColor: "#3B5998",
                                            borderRadius: "50%",
                                        }
                                    }/>
                            </a>
                            {" "} </div>
                        {" "}
                        <div className="twitter">
                            {" "}
                            <a href="https://jansampark.org/our-products.html#">
                                {" "}
                                <BsTwitter style={
                                    {
                                        height: "50px",
                                        width: "50px",
                                        color: "white",
                                        padding: "10px 6px",
                                        backgroundColor: "#00ACED",
                                        borderRadius: "50%",
                                        marginLeft: "10px",
                                    }
                                }/>
                            </a>
                            {" "} </div>
                        {" "}
                        <div className="instagram">
                            {" "}
                            <a href="">
                                {" "}
                                <BiLogoInstagram style={
                                    {
                                        height: "50px",
                                        width: "50px",
                                        color: "white",
                                        padding: "0px 4px",
                                        backgroundColor: "#E4405F",
                                        borderRadius: "50%",
                                        marginLeft: "10px",
                                    }
                                }/>
                            </a>
                            {" "} </div>
                        {" "}
                        <div className="youtube">
                            {" "}
                            <TfiYoutube style={
                                {
                                    height: "50px",
                                    width: "50px",
                                    color: "white",
                                    padding: "10px 0px",
                                    backgroundColor: "#C4302B",
                                    borderRadius: "50%",
                                    marginLeft: "10px",
                                }
                            }/>{" "} </div>
                        <div className="linkedin">
                            <BsLinkedin style={
                                {
                                    height: "50px",
                                    width: "50px",
                                    color: "white",
                                    padding: "10px 6px",
                                    backgroundColor: "#0077B5",
                                    borderRadius: "50%",
                                    marginLeft: "10px",
                                }
                            }/>{" "} </div>
                        {" "} </div>
                </div>
                {" "} </div>
            {" "} </>
    );
};

export default Contact;
