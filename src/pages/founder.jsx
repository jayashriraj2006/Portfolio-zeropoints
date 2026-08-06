import {
  UserRound,
  Briefcase,
  Code2,
  Palette,
  TrendingUp,
  Search,
  Settings,
  Users,
  Lightbulb,
  Mail,
  Phone,
  MapPin
} from "lucide-react";


import {
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";



function SkillCard({ icon, title }) {

  return (

    <div className="bg-white rounded-[28px] p-8 shadow-lg border border-gray-200 hover:-translate-y-3 transition duration-500">


      <div className="text-red-700">

        {icon}

      </div>


      <h3 className="text-2xl font-bold mt-8">

        {title}

      </h3>


      <p className="text-gray-500 mt-4 leading-7">

        Delivering practical technology solutions with quality,
        innovation and long-term business value.

      </p>


    </div>

  );

}




function Founder() {


return (

<div className="bg-white text-gray-900 overflow-hidden">



{/* ================= HERO SECTION ================= */}


<section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-28">


<div className="absolute top-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>


<div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>




<div className="max-w-7xl mx-auto px-6 relative z-10">


<div className="grid lg:grid-cols-2 gap-16 items-center">



<div className="flex justify-center">


<div className="w-[380px] h-[480px] rounded-[30px] border-2 border-dashed border-white/40 bg-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-center items-center">


<div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">


<UserRound size={60}/>


</div>




<h3 className="mt-8 text-2xl font-bold">

Founder Photo

</h3>




<p className="mt-3 text-gray-300 text-center px-8">

Replace this placeholder with official founder photograph.

</p>



</div>


</div>





<div>


<p className="uppercase tracking-[6px] text-red-300 font-semibold">

Founder

</p>




<h1 className="text-6xl font-extrabold mt-6">

Meet The
<br/>
Founder

</h1>




<p className="text-gray-300 mt-8 text-lg leading-9">

Passionately building technology that empowers businesses,
creates meaningful digital experiences, and transforms
innovative ideas into long-term business success.

</p>




<div className="flex gap-5 mt-10">


<button className="bg-red-700 hover:bg-red-800 px-8 py-4 rounded-xl font-semibold">

Connect

</button>



<button className="border border-white/40 px-8 py-4 rounded-xl">

Learn More

</button>


</div>


</div>


</div>


</div>


</section>





{/* ================= BIOGRAPHY ================= */}


<section className="py-28 bg-gray-100">


<div className="max-w-6xl mx-auto px-6">


<div className="bg-white rounded-[30px] shadow-2xl p-14">


<p className="uppercase tracking-[4px] text-red-700 font-semibold">

Biography

</p>



<h2 className="text-5xl font-bold mt-5">

Building Technology With Purpose

</h2>




<p className="text-gray-600 text-lg leading-9 mt-10">

ZeroPoint Labs is founded by <strong>S. Jeevesh</strong>,
an engineering student and entrepreneur driven by a passion
for building technology that solves real business challenges.

</p>




<p className="text-gray-600 text-lg leading-9 mt-8">

Beginning with freelance website development, Jeevesh expanded
his vision into a collaborative agency delivering websites,
software, digital marketing, branding, SEO and automation
solutions.

</p>




<p className="text-gray-600 text-lg leading-9 mt-8">

His long-term vision is to transform ZeroPoint Labs into a
technology company that creates products businesses genuinely
depend on.

</p>



</div>


</div>


</section>
{/* ================= JOURNEY ================= */}

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6">


<div className="text-center">


<p className="uppercase tracking-[5px] text-red-700 font-semibold">

Journey

</p>


<h2 className="text-5xl font-bold mt-5">

From Freelancer to Founder

</h2>


<p className="text-gray-500 mt-5">

Every milestone represents growth, learning and building towards
a larger vision.

</p>


</div>





<div className="relative max-w-3xl mx-auto mt-20">


<div className="absolute left-1/2 top-0 h-full w-1 bg-red-700 -translate-x-1/2"></div>




{[
"Freelancer",
"First Client",
"Recurring Clients",
"Student Team Formation",
"ZeroPoint Labs",
"Technology Products"
].map((item,index)=>(


<div
key={index}
className={`flex items-center mb-16 ${
index % 2 === 0
? "justify-start"
: "justify-end"
}`}
>



<div className="w-5 h-5 rounded-full bg-red-700 absolute left-1/2 -translate-x-1/2"></div>




<div className="w-[45%] bg-white rounded-3xl shadow-xl border border-gray-200 p-8">


<h3 className="text-2xl font-bold">

{item}

</h3>


</div>



</div>


))}


</div>


</div>


</section>







{/* ================= SKILLS ================= */}


<section className="py-28 bg-gray-100">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center">


<p className="uppercase tracking-[5px] text-red-700 font-semibold">

Skills

</p>




<h2 className="text-5xl font-bold mt-5">

Expertise That Builds Businesses

</h2>


</div>






<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">


<SkillCard
icon={<Briefcase size={50}/>}
title="Business Strategy"
/>



<SkillCard
icon={<Code2 size={50}/>}
title="Web Development"
/>



<SkillCard
icon={<Palette size={50}/>}
title="UI / UX Design"
/>



<SkillCard
icon={<TrendingUp size={50}/>}
title="Digital Marketing"
/>



<SkillCard
icon={<Search size={50}/>}
title="SEO"
/>



<SkillCard
icon={<Settings size={50}/>}
title="Automation"
/>



<SkillCard
icon={<UserRound size={50}/>}
title="Leadership"
/>



<SkillCard
icon={<Users size={50}/>}
title="Client Consulting"
/>



</div>


</div>


</section>







{/* ================= ACHIEVEMENTS ================= */}


<section className="py-28 bg-white">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-16">


<p className="uppercase tracking-[5px] text-red-700 font-semibold">

Achievements

</p>



<h2 className="text-5xl font-bold mt-5">

Delivering Meaningful Results

</h2>




<p className="text-gray-500 mt-5">

Every solution is built with one goal — helping businesses grow.

</p>


</div>







<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">



{[
"Business Websites",
"CRM Systems",
"Billing Software",
"Digital Marketing Campaigns",
"Social Media Growth",
"Business Automation"

].map((item,index)=>(


<div
key={index}
className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:-translate-y-3 transition duration-500"
>



<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">


<Lightbulb
size={35}
className="text-red-700"
/>


</div>




<h3 className="text-2xl font-bold mt-6">

{item}

</h3>



<p className="text-gray-500 mt-4">

Successfully delivered with a focus on quality,
performance and long-term business value.

</p>



</div>


))}



</div>


</div>


</section>
{/* ================= VISION ================= */}

<section className="py-32 bg-gradient-to-r from-black via-gray-900 to-red-900 text-white">


<div className="max-w-5xl mx-auto px-6 text-center">


<p className="uppercase tracking-[5px] text-red-300 font-semibold">

Vision

</p>




<h2 className="text-5xl font-bold mt-8">

"I don't want to build just another agency."

</h2>




<p className="text-2xl text-gray-300 mt-10 leading-10">

I want to build a technology company that creates
products businesses genuinely depend on.

</p>




<div className="mt-16">


<div className="w-28 h-28 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto">


<UserRound size={60}/>


</div>




<h3 className="mt-8 text-3xl font-bold">

S. Jeevesh

</h3>




<p className="text-gray-400 mt-2">

Founder • ZeroPoint Labs

</p>


</div>


</div>


</section>








{/* ================= CALL TO ACTION ================= */}


<section className="py-24 bg-white">


<div className="max-w-6xl mx-auto px-6">


<div className="rounded-[32px] bg-gradient-to-r from-red-700 to-black text-white p-16 text-center shadow-2xl">


<h2 className="text-5xl font-bold">

Let's Build Something Meaningful

</h2>




<p className="mt-6 text-lg text-gray-200">

Every successful business starts with a vision.
Let's transform your ideas into powerful digital solutions.

</p>




<button className="mt-10 bg-white text-black px-10 py-4 rounded-xl font-bold">

Start Your Project

</button>


</div>


</div>


</section>









{/* ================= FOOTER ================= */}


<footer className="bg-[#111111] text-white">


<div className="max-w-7xl mx-auto px-6 py-24">


<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">





{/* COMPANY */}


<div>


<h2 className="text-3xl font-bold">

ZeroPoint Labs

</h2>




<p className="text-gray-400 mt-6 leading-8">

We don't just build websites.
We engineer digital systems that help businesses
grow, scale and succeed.

</p>


</div>







{/* LINKS */}


<div>


<h3 className="text-xl font-semibold mb-6">

Quick Links

</h3>



<ul className="space-y-4 text-gray-400">

<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Founder</li>
<li>Contact</li>

</ul>


</div>








{/* SERVICES */}


<div>


<h3 className="text-xl font-semibold mb-6">

Services

</h3>




<ul className="space-y-4 text-gray-400">

<li>Website Development</li>
<li>Custom Software</li>
<li>SEO</li>
<li>Branding</li>
<li>Business Automation</li>

</ul>


</div>








{/* CONTACT */}


<div>


<h3 className="text-xl font-semibold mb-6">

Contact

</h3>





<div className="space-y-5 text-gray-400">



<div className="flex items-center gap-3">

<Mail size={20}/>

<span>

jeeveshs18@gmail.com

</span>

</div>





<div className="flex items-center gap-3">

<Phone size={20}/>

<span>

+91 90253 14278

</span>

</div>





<div className="flex items-center gap-3">

<MapPin size={20}/>

<span>

Chennai, Tamil Nadu

</span>

</div>



</div>








{/* SOCIAL ICONS */}


<div className="flex gap-4 mt-8">



<div className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-700 flex items-center justify-center cursor-pointer transition">

<FaInstagram size={22}/>

</div>




<div className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-700 flex items-center justify-center cursor-pointer transition">

<FaLinkedin size={22}/>

</div>




<div className="w-12 h-12 rounded-full bg-white/10 hover:bg-red-700 flex items-center justify-center cursor-pointer transition">

<FaYoutube size={22}/>

</div>



</div>


</div>





</div>







<div className="border-t border-white/10 mt-20 pt-8 text-center">


<p className="text-gray-500">

© 2026 ZeroPoint Labs. All Rights Reserved.

</p>


</div>




</div>


</footer>



</div>


);


}


export default Founder;
