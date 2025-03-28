
import Slide from "@/Components/Landing Page/Slide";
import Nav from "@/Components/Landing Page/Nav";
import Front from "@/Components/Landing Page/Front";
import PersonalCare from "@/Components/Landing Page/PersonalCare";
import Card from "@/Components/Landing Page/Card";
import BookApp from "@/Components/Landing Page/BookApp";
import Patient from "@/Components/Landing Page/Patient";
import Partner from "@/Components/Landing Page/Partner";
import Footer from "@/Components/Landing Page/Footer";
import Testimonial from "@/Components/Landing Page/Testimonial";
export default function page() {
  return (
   <>
   <Nav/>
   <Front/>
   <hr/>
   <Slide/>
   <PersonalCare/>
   <Card/>
   <BookApp/>
   <Patient/>
   <Testimonial/>
   <Partner/>
   <hr/>
   <Footer/>

   
   </>
  );
}
