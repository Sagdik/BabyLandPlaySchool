import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ChevronRight, 
  ChevronLeft,
  Heart, 
  Star, 
  Music, 
  Palette, 
  BookOpen, 
  Users,
  CheckCircle2,
  Send
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Types ---
interface FormData {
  name: string;
  email?: string;
  phone: string;
  age?: string;
  parentName?: string;
  message: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 px-4 py-3",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="https://i.postimg.cc/rprrRZbP/school-Log.jpg" 
            alt="Baby land Playway School Logo" 
            className="w-16 h-16 object-contain rounded-full border-4 border-school-yellow shadow-xl group-hover:scale-110 transition-all duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-school-red leading-none">Baby land</span>
            <span className="font-sans text-xs font-semibold text-school-yellow-light bg-school-red px-1 rounded">Playway School</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-semibold text-gray-700 hover:text-school-red transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-school-yellow transition-all group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <a href="#admissions" className="school-btn-primary py-2 px-6 text-sm">
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-school-red" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-2 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-lg text-gray-700 hover:text-school-red p-2 rounded-xl hover:bg-school-yellow/10"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#admissions" 
                onClick={() => setIsOpen(false)}
                className="school-btn-primary text-center"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-school-yellow/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-school-red/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-school-yellow/20 text-school-red font-bold rounded-full mb-4">
            Welcome to Balpan
          </span>
          <h1 className="text-5xl md:text-7xl font-display text-gray-900 mb-6 leading-tight">
            Learn, Play, Grow at <span className="text-school-red">Baby land</span> Playway School
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Providing a nurturing environment where every child's potential is discovered and celebrated through creative play and structured learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#admissions" className="school-btn-primary flex items-center gap-2">
              Enroll Now <ChevronRight size={20} />
            </a>
            <a href="#about" className="school-btn-secondary">
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800" 
              alt="Happy kids in school" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-school-yellow rounded-2xl -rotate-12 z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-school-red rounded-full z-0 opacity-50"></div>
          
          <div className="absolute top-1/2 -right-12 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:block animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Star fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-sm">Best Preschool</p>
                <p className="text-xs text-gray-500">Award 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  const features = [
    { icon: <Heart className="text-school-red" />, title: "Loving Care", desc: "A home away from home with dedicated teachers." },
    { icon: <Palette className="text-orange-500" />, title: "Creative Arts", desc: "Expressing imagination through colors and crafts." },
    { icon: <Music className="text-blue-500" />, title: "Music & Dance", desc: "Rhythmic learning and physical expression." },
    { icon: <BookOpen className="text-green-500" />, title: "Smart Learning", desc: "Modern curriculum tailored for early childhood." },
  ];

  return (
    <section id="about" className="py-24 bg-school-yellow/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Why Choose <span className="text-school-red">Us?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Baby land Playway School, we believe the first years of school are the most important. Our mission is to provide a safe, fun, and educational space for your little ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" 
              alt="Classroom" 
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=400" 
              alt="Kids playing" 
              className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-6">Our Mission & Values</h3>
            <p className="text-gray-600 mb-6">
              We focus on holistic development - emotional, social, physical, and cognitive. Our teachers are trained to handle kids with patience and love, ensuring they wear their yellow and red uniforms with pride every day!
            </p>
            <ul className="space-y-4">
              {['Safe & Secure Environment', 'Qualified & Caring Staff', 'Nutritious Meals Provided', 'Regular Parent-Teacher Meetings'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                  <CheckCircle2 className="text-school-red" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="school-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                {feature.icon}
              </div>
              <h4 className="text-xl mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = [
    { url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600", title: "Morning Assembly" },
    { url: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=600", title: "Creative Class" },
    { url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600", title: "Play Time" },
    { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600", title: "Science Fun" },
    { url: "https://www.sws.ac.in/blog/attachments/blog_images/ARTCRAFT.JPG", title: "Art Workshop" },
    { url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600", title: "Outdoor Activities" },
  ];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedIdx(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our <span className="text-school-red">Gallery</span></h2>
          <p className="text-gray-600">Capturing the joyful moments of our little stars.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedIdx(index)}
              className="group relative rounded-3xl overflow-hidden shadow-lg aspect-square cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-red/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white hover:text-school-yellow transition-colors z-[110]"
            >
              <X size={40} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white hover:text-school-yellow transition-colors z-[110] bg-white/10 p-2 rounded-full backdrop-blur-sm"
            >
              <ChevronLeft size={40} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white hover:text-school-yellow transition-colors z-[110] bg-white/10 p-2 rounded-full backdrop-blur-sm"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={selectedIdx}
              initial={{ opacity: 0, scale: 0.9, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
            >
              <img 
                src={images[selectedIdx].url} 
                alt={images[selectedIdx].title} 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center"
              >
                <h3 className="text-white text-2xl md:text-3xl font-display">{images[selectedIdx].title}</h3>
                <p className="text-gray-400 mt-2">Image {selectedIdx + 1} of {images.length}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Admissions = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'Admission', data }),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="admissions" className="py-24 bg-school-red/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="school-card overflow-visible grid md:grid-cols-2">
          <div className="p-8 md:p-12 bg-school-yellow text-gray-900">
            <h2 className="text-4xl mb-6">Enroll Your <span className="text-school-red">Child</span></h2>
            <p className="mb-8 font-medium">
              Join the Baby Land family! Fill out this simple form and our admissions team will get back to you within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
                  <Users className="text-school-red" />
                </div>
                <div>
                  <p className="font-bold">Limited Seats</p>
                  <p className="text-sm opacity-80">Batch 2024-25</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center">
                  <BookOpen className="text-school-red" />
                </div>
                <div>
                  <p className="font-bold">Age Group</p>
                  <p className="text-sm opacity-80">2.5 to 5 Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-white">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl mb-2">Application Received!</h3>
                <p className="text-gray-600">Thank you for choosing Baby land Playway School. We will contact you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input 
                    {...register("name", { required: "Child's name is required" })}
                    placeholder="Child's Name" 
                    className={cn("input-field", errors.name && "border-red-500")}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    {...register("age")}
                    placeholder="Age" 
                    className="input-field"
                  />
                  <input 
                    {...register("parentName", { required: "Parent's name is required" })}
                    placeholder="Parent's Name" 
                    className={cn("input-field", errors.parentName && "border-red-500")}
                  />
                </div>
                <div>
                  <input 
                    {...register("phone", { required: "Phone number is required" })}
                    placeholder="Phone Number" 
                    className={cn("input-field", errors.phone && "border-red-500")}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <textarea 
                  {...register("message")}
                  placeholder="Any specific requirements or questions?" 
                  rows={4}
                  className="input-field resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  disabled={loading}
                  className={cn("school-btn-primary w-full flex items-center justify-center gap-2", loading && "opacity-70 cursor-not-allowed")}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'Contact', data }),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get in <span className="text-school-red">Touch</span></h2>
          <p className="text-gray-600">We'd love to hear from you. Visit us or drop a message!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-school-yellow rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-school-red" />
              </div>
              <div>
                <h4 className="text-xl mb-1">Our Location</h4>
                <p className="text-gray-600">LIG 6,7 Vikas nagar bargadwa gorakhpur</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-school-yellow rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-school-red" />
              </div>
              <div>
                <h4 className="text-xl mb-1">Call Us</h4>
                <p className="text-gray-600">7565083874</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-school-yellow rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-school-red" />
              </div>
              <div>
                <h4 className="text-xl mb-1">Email Us</h4>
                <p className="text-gray-600">BabylandSchool@gmail.com</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-64 shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.476483486161!2d83.332305!3d26.760556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ1JzM4LjAiTiA4M8KwMTknNTYuMyJF!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-4 border-school-yellow/10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input 
                      {...register("name", { required: true })}
                      placeholder="Your Name" 
                      className="input-field"
                    />
                    <input 
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Your Email" 
                      className="input-field"
                    />
                  </div>
                  <input 
                    {...register("phone")}
                    placeholder="Phone Number" 
                    className="input-field"
                  />
                  <textarea 
                    {...register("message", { required: true })}
                    placeholder="Your Message" 
                    rows={6}
                    className="input-field resize-none"
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className={cn("school-btn-primary w-full md:w-auto flex items-center justify-center gap-2", loading && "opacity-70 cursor-not-allowed")}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.postimg.cc/rprrRZbP/school-Log.jpg" 
                alt="Logo" 
                className="w-16 h-16 object-contain rounded-full bg-white p-1 border-2 border-school-yellow shadow-lg"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-2xl font-bold text-white">Baby land Playway School</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering children through play-based learning and creative exploration. Join us in building a bright future for your little ones.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-school-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-school-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/917565083874" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.888 11.888 0 005.685 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-school-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-school-yellow transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-school-yellow transition-colors">Gallery</a></li>
              <li><a href="#admissions" className="hover:text-school-yellow transition-colors">Admissions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-display mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-school-yellow shrink-0" />
                <span>LIG 6,7 Vikas Nagar, Bargadwa, Gorakhpur,Uttar Pradesh,India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-school-yellow shrink-0" />
                <span>7565083874</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-school-yellow shrink-0" />
                <span>BabylandSchool@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Baby land Playway School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917565083874" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:bg-green-600 transition-all transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.888 11.888 0 005.685 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      {/* Scroll to top button (optional but nice) */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-school-red text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:bg-school-red-light transition-colors"
      >
        <ChevronRight className="-rotate-90" />
      </motion.button>
    </div>
  );
}
