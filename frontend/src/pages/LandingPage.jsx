import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Tag, Rate } from 'antd';
import { BookOutlined, SafetyCertificateOutlined, GlobalOutlined, ClockCircleOutlined, TeamOutlined, LineChartOutlined, UserOutlined, TrophyOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import Logo from '../components/Logo';

const courses = [
  {
    id: 1,
    title: 'Advanced React Development',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 2847,
    duration: '12 hours',
    level: 'Advanced',
    price: 89,
    thumbnail: <BookOutlined className="text-terracotta-500 text-5xl" />,
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    instructor: 'Dr. Michael Chen',
    rating: 4.8,
    students: 1923,
    duration: '16 hours',
    level: 'Intermediate',
    price: 129,
    thumbnail: <SafetyCertificateOutlined className="text-sage-500 text-5xl" />,
    category: 'Data Science',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    instructor: 'Emma Rodriguez',
    rating: 4.9,
    students: 3421,
    duration: '8 hours',
    level: 'Beginner',
    price: 69,
    thumbnail: <GlobalOutlined className="text-mustard-500 text-5xl" />,
    category: 'Design',
  }
];

const features = [
  {
    icon: <BookOutlined className="text-4xl text-terracotta-500" />,
    title: 'Expert-Led Courses',
    description: 'Learn from industry professionals with real-world experience.',
    color: 'bg-terracotta-50 dark:bg-terracotta-900'
  },
  {
    icon: <SafetyCertificateOutlined className="text-4xl text-olive-500" />,
    title: 'Earn Certificates',
    description: 'Get recognized for your achievements with industry-valued certificates.',
    color: 'bg-olive-50 dark:bg-olive-900'
  },
  {
    icon: <TeamOutlined className="text-4xl text-sage-500" />,
    title: 'Community Learning',
    description: 'Connect with fellow learners and grow together.',
    color: 'bg-sage-50 dark:bg-sage-900'
  },
  {
    icon: <LineChartOutlined className="text-4xl text-mustard-500" />,
    title: 'Track Progress',
    description: 'Monitor your learning journey with detailed analytics.',
    color: 'bg-mustard-50 dark:bg-mustard-900'
  }
];

const stats = [
  { label: 'Active Students', value: '50K+', icon: <UserOutlined className="text-terracotta-500 text-2xl" /> },
  { label: 'Expert Instructors', value: '500+', icon: <TeamOutlined className="text-sage-500 text-2xl" /> },
  { label: 'Courses Available', value: '1000+', icon: <BookOutlined className="text-mustard-500 text-2xl" /> },
  { label: 'Certificates Issued', value: '25K+', icon: <TrophyOutlined className="text-olive-500 text-2xl" /> }
];

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Software Developer',
    content: 'LearnHub transformed my career. The courses are practical and the instructors are amazing!',
    avatar: <UserOutlined className="text-terracotta-500 text-3xl" />,
    rating: 5
  },
  {
    name: 'Maria Garcia',
    role: 'UX Designer',
    content: 'The design courses here are top-notch. I landed my dream job after completing the UX track.',
    avatar: <UserOutlined className="text-mustard-500 text-3xl" />,
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Data Scientist',
    content: 'The AI and ML courses are comprehensive and up-to-date with industry standards.',
    avatar: <UserOutlined className="text-sage-500 text-3xl" />,
    rating: 5
  }
];

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-charcoal-500">
      {/* Header */}
      <header className="bg-white dark:bg-charcoal-700 border-b border-warm-200 dark:border-warm-700 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo to="/" size="large" />
            <span className="font-extrabold text-2xl text-charcoal-500 dark:text-cream-100 tracking-tight">LearnHub</span>
          </div>
          <nav className="flex items-center gap-8 text-base font-medium">
            <Link to="/courses" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors">Courses</Link>
            <Link to="/trainers" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors">Instructors</Link>
            <Link to="/about" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors">About</Link>
            <Link to="/contact" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle inline />
            {isAuthenticated ? (
              <Link to="/dashboard"><Button type="primary">Dashboard</Button></Link>
            ) : (
              <>
                <Link to="/login"><Button>Sign In</Button></Link>
                <Link to="/register"><Button type="primary">Get Started</Button></Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-br from-cream-100 via-mustard-50 to-sage-50 dark:from-charcoal-500 dark:via-warm-800 dark:to-charcoal-600">
        <h1 className="text-5xl md:text-6xl font-extrabold text-charcoal-500 dark:text-cream-100 mb-6 leading-tight max-w-3xl">
          Master New Skills with <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-500 to-sage-500">Expert-Led</span> Courses
        </h1>
        <p className="text-xl md:text-2xl text-warm-500 dark:text-warm-300 mb-10 max-w-2xl">
          Transform your career with hands-on courses taught by industry professionals. Learn at your own pace and get certified.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center">
          <Link to="/courses"><Button type="primary" size="large">Start Learning Today</Button></Link>
          <Link to="/courses"><Button size="large">Browse Courses</Button></Link>
        </div>
        <div>
          <Link to="/register"><Button ghost size="large">Apply as a Learner</Button></Link>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-cream-100 dark:bg-charcoal-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-mustard-100 dark:bg-mustard-900 rounded-full mb-4 text-mustard-600 dark:text-mustard-400 text-sm font-medium">🔥 Most Popular</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-500 dark:text-cream-100 mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-500 to-sage-500">Courses</span></h2>
            <p className="text-lg text-warm-500 dark:text-warm-300 max-w-2xl mx-auto">Start with our most popular and highly-rated courses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="h-full shadow-xl rounded-2xl border-0 flex flex-col items-center py-8">
                <div className="flex flex-col items-center w-full">
                  <div className="mb-4 text-5xl">{course.thumbnail}</div>
                  <div className="flex gap-2 mb-2">
                    <Tag color="blue">{course.category}</Tag>
                    <Tag color="green">{course.level}</Tag>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal-500 dark:text-cream-100 mb-1 text-center">{course.title}</h3>
                  <p className="text-warm-500 dark:text-warm-300 mb-2 text-center">by {course.instructor}</p>
                  <div className="flex items-center mb-2">
                    <Rate disabled value={course.rating} allowHalf className="text-sm" />
                    <span className="ml-2 text-warm-500 dark:text-warm-300 text-sm">{course.rating} ({course.students.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <ClockCircleOutlined className="text-sage-500 mr-2" />
                    <span className="text-warm-500 dark:text-warm-300">{course.duration}</span>
                  </div>
                  <span className="text-2xl font-bold text-terracotta-500 mb-2">${course.price}</span>
                  <Button type="primary" block className="mt-2">Enroll Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-700 dark:bg-charcoal-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo to="/" size="large" />
            <span className="font-extrabold text-xl">LearnHub</span>
          </div>
          <div className="text-warm-300">© 2024 LearnHub. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
