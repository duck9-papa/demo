import emailjs from "@emailjs/browser";
import { GradientWrap } from "./SkillView";
import { useEffect, useRef, useState } from "react";
import {
  ContactContent,
  ContactForm,
  ImgFilm,
  ImgMono,
  PresentTitle,
} from "../assets/styles/CommonStyled";
import styled from "styled-components";
import contact1 from "../assets/images/contact1.jpg";
import contact2 from "../assets/images/contact2.jpg";
import contact3 from "../assets/images/contact3.jpg";
import contact4 from "../assets/images/contact4.jpg";
import contact5 from "../assets/images/contact5.jpg";
import toast from "react-hot-toast";

const Wrap = styled(GradientWrap)`
  flex-direction: column;
  justify-content: start;
  gap: 24px;
  padding: 16px 0;
`;

const ContactPage = () => {
  const [displayImg, setDisplayImg] = useState(0);
  const srcs = [contact1, contact2, contact3, contact4, contact5];

  useEffect(() => {
    setTimeout(() => {
      setDisplayImg(() => {
        const value = displayImg + 1;
        if (!srcs[value]) {
          return 0;
        }
        return value;
      });
    }, 5000);
  }, [displayImg]);

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio",
        "template_5y6ci7d",
        form.current,
        "YcYIWi4vwU2shFI1V"
      )
      .then(
        () => {
          toast.success("메일 전송에 성공하였습니다!");
          form.current.reset(); // 폼 초기화
        },
        (error) => {
          toast.error("메일 전송에 실패하였습니다");
        }
      );
  };

  return (
    <Wrap>
      <PresentTitle>CONTACT</PresentTitle>
      <ContactContent>
        <ImgMono>
          <ImgFilm $displayImg={displayImg} $value={400}>
            {srcs.map((i, index) => (
              <img key={`${index}imgKey`} src={i} />
            ))}
          </ImgFilm>
        </ImgMono>

        <ContactForm ref={form} onSubmit={sendEmail}>
          <label>Title</label>
          <input type="name" name="title" />
          <label>Name</label>
          <input type="name" name="name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </ContactForm>
      </ContactContent>
    </Wrap>
  );
};

export default ContactPage;
