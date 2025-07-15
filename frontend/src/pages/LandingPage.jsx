import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Tag, Rate, Row, Col, Typography, Avatar, Statistic } from 'antd';
import { 
    BookOutlined, 
    SafetyCertificateOutlined, 
    GlobalOutlined, 
    ClockCircleOutlined, 
    TeamOutlined, 
    LineChartOutlined, 
    UserOutlined, 
    TrophyOutlined,
    PlayCircleOutlined,
    CheckCircleOutlined,
    StarOutlined,
    RocketOutlined,
    HeartOutlined,
    ThunderboltOutlined,
    ArrowRightOutlined,
    FireOutlined
} from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import Logo from '../components/Logo';

const { Title, Text, Paragraph } = Typography;

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
        originalPrice: 149,
        thumbnail: '⚛️',
        category: 'Web Development',
        description: 'Master advanced React patterns, hooks, and performance optimization techniques.',
        skills: ['React', 'Hooks', 'Context API', 'Performance']
    },
    {
        id: 2,
        title: 'AI & Machine Learning Fundamentals',
        instructor: 'Dr. Michael Chen',
        rating: 4.8,
        students: 1923,
        duration: '16 hours',
        level: 'Intermediate',
        price: 129,
        originalPrice: 199,
        thumbnail: '🤖',
        category: 'Data Science',
        description: 'Learn the fundamentals of AI and ML with hands-on Python projects.',
        skills: ['Python', 'TensorFlow', 'Neural Networks', 'Data Analysis']
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
        originalPrice: 99,
        thumbnail: '🎨',
        category: 'Design',
        description: 'Create stunning user interfaces and experiences that users love.',
        skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping']
    }
];

const features = [
    {
        icon: <BookOutlined className="text-4xl text-terracotta-500" />,
        title: 'Expert-Led Courses',
        description: 'Learn from industry professionals with real-world experience and proven track records.',
        color: 'from-terracotta-50 to-terracotta-100 dark:from-terracotta-900 dark:to-terracotta-800'
    },
    {
        icon: <SafetyCertificateOutlined className="text-4xl text-olive-500" />,
        title: 'Industry Certificates',
        description: 'Earn recognized certificates that boost your career and validate your skills.',
        color: 'from-olive-50 to-olive-100 dark:from-olive-900 dark:to-olive-800'
    },
    {
        icon: <TeamOutlined className="text-4xl text-sage-500" />,
        title: 'Community Learning',
        description: 'Join a vibrant community of learners, share knowledge, and grow together.',
        color: 'from-sage-50 to-sage-100 dark:from-sage-900 dark:to-sage-800'
    },
    {
        icon: <LineChartOutlined className="text-4xl text-mustard-500" />,
        title: 'Track Your Progress',
        description: 'Monitor your learning journey with detailed analytics and personalized insights.',
        color: 'from-mustard-50 to-mustard-100 dark:from-mustard-900 dark:to-mustard-800'
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
        role: 'Software Developer at Google',
        content: 'LearnHub transformed my career completely. The courses are practical, engaging, and taught by amazing instructors who really care about student success.',
        avatar: '👨‍💻',
        rating: 5,
        company: 'Google'
    },
    {
        name: 'Maria Garcia',
        role: 'UX Designer at Airbnb',
        content: 'The design courses here are absolutely top-notch. I landed my dream job at Airbnb after completing the UX Design track. Highly recommended!',
        avatar: '👩‍🎨',
        rating: 5,
        company: 'Airbnb'
    },
    {
        name: 'David Kim',
        role: 'Data Scientist at Netflix',
        content: 'The AI and ML courses are comprehensive and up-to-date with industry standards. The hands-on projects really prepared me for real-world challenges.',
        avatar: '👨‍🔬',
        rating: 5,
        company: 'Netflix'
    }
];

const LandingPage = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-cream-100 dark:bg-charcoal-500">
            {/* Header */}
            <header className="bg-white/95 dark:bg-charcoal-700/95 backdrop-blur-md border-b border-warm-200 dark:border-warm-700 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Logo to="/" size="large" />
                            <span className="font-extrabold text-2xl text-charcoal-500 dark:text-cream-100 tracking-tight">
                                LearnHub
                            </span>
                        </div>
                        
                        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
                            <Link to="/courses" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors duration-200">
                                Courses
                            </Link>
                            <Link to="/trainers" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors duration-200">
                                Instructors
                            </Link>
                            <Link to="/about" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors duration-200">
                                About
                            </Link>
                            <Link to="/contact" className="text-warm-500 dark:text-warm-300 hover:text-terracotta-500 transition-colors duration-200">
                                Contact
                            </Link>
                        </nav>
                        
                        <div className="flex items-center gap-3">
                            <ThemeToggle inline />
                            {isAuthenticated ? (
                                <Link to="/dashboard">
                                    <Button type="primary" className="bg-terracotta-500 hover:bg-terracotta-600 border-terracotta-500 hover:border-terracotta-600 h-10 px-6 rounded-lg font-medium">
                                        Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Link to="/login">
                                        <Button className="h-10 px-6 rounded-lg font-medium border-warm-300 text-warm-600 hover:border-terracotta-500 hover:text-terracotta-500">
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button type="primary" className="bg-terracotta-500 hover:bg-terracotta-600 border-terracotta-500 hover:border-terracotta-600 h-10 px-6 rounded-lg font-medium">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-mustard-50 to-sage-50 dark:from-charcoal-600 dark:via-warm-800 dark:to-charcoal-500">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta-200 dark:bg-terracotta-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-sage-200 dark:bg-sage-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-mustard-200 dark:bg-mustard-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
                    <div className="text-center space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-charcoal-700/80 backdrop-blur-sm px-4 py-2 rounded-full border border-warm-200 dark:border-warm-600">
                                <FireOutlined className="text-terracotta-500" />
                                <Text className="text-sm font-medium text-charcoal-500 dark:text-cream-100">
                                    🎉 Join 50,000+ learners worldwide
                                </Text>
                            </div>
                            
                            <Title level={1} className="text-5xl lg:text-7xl font-extrabold text-charcoal-500 dark:text-cream-100 leading-tight max-w-5xl mx-auto">
                                Master New Skills with{' '}
                                <span className="bg-gradient-to-r from-terracotta-500 via-sage-500 to-mustard-500 bg-clip-text text-transparent">
                                    World-Class
                                </span>{' '}
                                Instructors
                            </Title>
                            
                            <Paragraph className="text-xl lg:text-2xl text-warm-600 dark:text-warm-300 max-w-3xl mx-auto leading-relaxed">
                                Transform your career with hands-on courses taught by industry experts. 
                                Learn at your own pace, earn certificates, and join a thriving community.
                            </Paragraph>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link to="/courses">
                                <Button 
                                    type="primary" 
                                    size="large" 
                                    icon={<RocketOutlined />}
                                    className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 border-0 h-14 px-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    Start Learning Today
                                </Button>
                            </Link>
                            <Link to="/courses">
                                <Button 
                                    size="large" 
                                    icon={<PlayCircleOutlined />}
                                    className="h-14 px-8 text-lg font-semibold rounded-xl border-2 border-sage-500 text-sage-600 hover:bg-sage-50 dark:hover:bg-sage-900 hover:border-sage-600 transition-all duration-300"
                                >
                                    Browse Courses
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-8">
                            <Text className="text-sm text-warm-500 dark:text-warm-400 mb-4 block">
                                Trusted by learners at top companies
                            </Text>
                            <div className="flex justify-center items-center gap-8 opacity-60">
                                <div className="text-2xl font-bold text-charcoal-400">Google</div>
                                <div className="text-2xl font-bold text-charcoal-400">Microsoft</div>
                                <div className="text-2xl font-bold text-charcoal-400">Apple</div>
                                <div className="text-2xl font-bold text-charcoal-400">Netflix</div>
                                <div className="text-2xl font-bold text-charcoal-400">Airbnb</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white dark:bg-charcoal-700">
                <div className="max-w-6xl mx-auto px-6">
                    <Row gutter={[32, 32]}>
                        {stats.map((stat, index) => (
                            <Col key={index} xs={24} sm={12} lg={6}>
                                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-cream-50 dark:from-warm-900 dark:to-warm-800">
                                    <div className="space-y-3">
                                        <div className="flex justify-center">{stat.icon}</div>
                                        <Statistic
                                            value={stat.value}
                                            valueStyle={{ 
                                                fontSize: '2rem', 
                                                fontWeight: 'bold',
                                                color: 'var(--ant-color-text)'
                                            }}
                                        />
                                        <Text className="text-warm-500 dark:text-warm-300 font-medium">
                                            {stat.label}
                                        </Text>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-20 bg-cream-50 dark:bg-charcoal-600">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 bg-mustard-100 dark:bg-mustard-900 px-4 py-2 rounded-full">
                            <FireOutlined className="text-mustard-600 dark:text-mustard-400" />
                            <Text className="text-mustard-700 dark:text-mustard-300 font-medium">
                                Most Popular
                            </Text>
                        </div>
                        <Title level={2} className="text-4xl lg:text-5xl font-bold text-charcoal-500 dark:text-cream-100">
                            Featured{' '}
                            <span className="bg-gradient-to-r from-terracotta-500 to-sage-500 bg-clip-text text-transparent">
                                Courses
                            </span>
                        </Title>
                        <Paragraph className="text-lg text-warm-600 dark:text-warm-300 max-w-2xl mx-auto">
                            Start with our most popular and highly-rated courses designed by industry experts
                        </Paragraph>
                    </div>

                    <Row gutter={[32, 32]}>
                        {courses.map((course) => (
                            <Col key={course.id} xs={24} md={12} lg={8}>
                                <Card 
                                    className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white dark:bg-warm-900 overflow-hidden group"
                                    cover={
                                        <div className="relative bg-gradient-to-br from-terracotta-50 to-sage-50 dark:from-terracotta-900 dark:to-sage-900 p-8 text-center">
                                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {course.thumbnail}
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <Tag className="bg-white/90 dark:bg-charcoal-700/90 border-0 text-terracotta-600 dark:text-terracotta-400 font-medium">
                                                    {course.category}
                                                </Tag>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <Tag className={`border-0 font-medium ${
                                                    course.level === 'Beginner' ? 'bg-olive-100 dark:bg-olive-900 text-olive-700 dark:text-olive-300' :
                                                    course.level === 'Intermediate' ? 'bg-mustard-100 dark:bg-mustard-900 text-mustard-700 dark:text-mustard-300' :
                                                    'bg-rust-100 dark:bg-rust-900 text-rust-700 dark:text-rust-300'
                                                }`}>
                                                    {course.level}
                                                </Tag>
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="space-y-4">
                                        <div>
                                            <Title level={4} className="text-charcoal-500 dark:text-cream-100 mb-2 group-hover:text-terracotta-500 transition-colors">
                                                {course.title}
                                            </Title>
                                            <Text className="text-sage-600 dark:text-sage-400 font-medium">
                                                by {course.instructor}
                                            </Text>
                                        </div>

                                        <Paragraph className="text-warm-600 dark:text-warm-300 text-sm">
                                            {course.description}
                                        </Paragraph>

                                        <div className="flex flex-wrap gap-1">
                                            {course.skills.slice(0, 3).map((skill) => (
                                                <Tag key={skill} className="bg-sage-100 dark:bg-sage-900 text-sage-700 dark:text-sage-300 border-0 text-xs">
                                                    {skill}
                                                </Tag>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Rate disabled value={course.rating} allowHalf className="text-sm" />
                                                <Text className="text-warm-500 dark:text-warm-300 text-sm">
                                                    {course.rating} ({course.students.toLocaleString()})
                                                </Text>
                                            </div>
                                            <div className="flex items-center gap-1 text-sage-500">
                                                <ClockCircleOutlined />
                                                <Text className="text-warm-500 dark:text-warm-300 text-sm">
                                                    {course.duration}
                                                </Text>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-warm-200 dark:border-warm-700">
                                            <div className="flex items-center gap-2">
                                                <Text className="text-2xl font-bold text-terracotta-500">
                                                    ${course.price}
                                                </Text>
                                                <Text className="text-sm line-through text-warm-400">
                                                    ${course.originalPrice}
                                                </Text>
                                            </div>
                                            <Button 
                                                type="primary" 
                                                className="bg-terracotta-500 hover:bg-terracotta-600 border-terracotta-500 hover:border-terracotta-600 rounded-lg"
                                            >
                                                Enroll Now
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="text-center mt-12">
                        <Link to="/courses">
                            <Button 
                                size="large" 
                                icon={<ArrowRightOutlined />}
                                className="h-12 px-8 text-lg font-medium rounded-xl border-2 border-terracotta-500 text-terracotta-600 hover:bg-terracotta-50 dark:hover:bg-terracotta-900"
                            >
                                View All Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-charcoal-700">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <Title level={2} className="text-4xl lg:text-5xl font-bold text-charcoal-500 dark:text-cream-100">
                            Why Choose{' '}
                            <span className="bg-gradient-to-r from-sage-500 to-mustard-500 bg-clip-text text-transparent">
                                LearnHub?
                            </span>
                        </Title>
                        <Paragraph className="text-lg text-warm-600 dark:text-warm-300 max-w-2xl mx-auto">
                            We provide everything you need to succeed in your learning journey
                        </Paragraph>
                    </div>

                    <Row gutter={[32, 32]}>
                        {features.map((feature, index) => (
                            <Col key={index} xs={24} sm={12} lg={6}>
                                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${feature.color} group`}>
                                    <div className="text-center space-y-4">
                                        <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                                            {feature.icon}
                                        </div>
                                        <Title level={4} className="text-charcoal-500 dark:text-cream-100">
                                            {feature.title}
                                        </Title>
                                        <Paragraph className="text-warm-600 dark:text-warm-300">
                                            {feature.description}
                                        </Paragraph>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-br from-sage-50 to-mustard-50 dark:from-charcoal-600 dark:to-warm-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <Title level={2} className="text-4xl lg:text-5xl font-bold text-charcoal-500 dark:text-cream-100">
                            What Our{' '}
                            <span className="bg-gradient-to-r from-terracotta-500 to-olive-500 bg-clip-text text-transparent">
                                Students Say
                            </span>
                        </Title>
                        <Paragraph className="text-lg text-warm-600 dark:text-warm-300 max-w-2xl mx-auto">
                            Join thousands of successful learners who transformed their careers with LearnHub
                        </Paragraph>
                    </div>

                    <Row gutter={[32, 32]}>
                        {testimonials.map((testimonial, index) => (
                            <Col key={index} xs={24} lg={8}>
                                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-warm-900">
                                    <div className="space-y-4">
                                        <div className="flex justify-center">
                                            <Rate disabled value={testimonial.rating} className="text-mustard-500" />
                                        </div>
                                        <Paragraph className="text-warm-600 dark:text-warm-300 text-center italic text-lg leading-relaxed">
                                            "{testimonial.content}"
                                        </Paragraph>
                                        <div className="text-center space-y-2">
                                            <div className="text-4xl">{testimonial.avatar}</div>
                                            <div>
                                                <Title level={5} className="text-charcoal-500 dark:text-cream-100 mb-1">
                                                    {testimonial.name}
                                                </Title>
                                                <Text className="text-sage-600 dark:text-sage-400 font-medium">
                                                    {testimonial.role}
                                                </Text>
                                                <br />
                                                <Text className="text-warm-500 dark:text-warm-300 text-sm">
                                                    {testimonial.company}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-terracotta-500 via-sage-500 to-mustard-500">
                <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-8">
                    <div className="space-y-4">
                        <Title level={2} className="text-4xl lg:text-5xl font-bold text-white">
                            Ready to Transform Your Career?
                        </Title>
                        <Paragraph className="text-xl text-white/90 max-w-2xl mx-auto">
                            Join thousands of learners who are already building their future with LearnHub. 
                            Start your journey today with our expert-led courses.
                        </Paragraph>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/register">
                            <Button 
                                size="large" 
                                icon={<RocketOutlined />}
                                className="bg-white text-terracotta-600 border-white hover:bg-cream-100 hover:border-cream-100 h-14 px-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Learning Free
                            </Button>
                        </Link>
                        <Link to="/become-trainer">
                            <Button 
                                size="large" 
                                icon={<HeartOutlined />}
                                className="bg-transparent text-white border-2 border-white hover:bg-white/10 h-14 px-8 text-lg font-semibold rounded-xl transition-all duration-300"
                            >
                                Become an Instructor
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8">
                        <Text className="text-white/80">
                            💳 No credit card required • 🎯 7-day free trial • ⭐ Cancel anytime
                        </Text>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-charcoal-700 dark:bg-charcoal-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <Row gutter={[32, 32]}>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Logo to="/" size="large" />
                                    <span className="font-extrabold text-xl">LearnHub</span>
                                </div>
                                <Paragraph className="text-warm-300">
                                    Empowering learners worldwide with expert-led courses and industry-recognized certificates.
                                </Paragraph>
                                <div className="flex gap-4">
                                    <Button type="text" className="text-warm-300 hover:text-white p-2">
                                        <GlobalOutlined className="text-xl" />
                                    </Button>
                                    <Button type="text" className="text-warm-300 hover:text-white p-2">
                                        <TeamOutlined className="text-xl" />
                                    </Button>
                                    <Button type="text" className="text-warm-300 hover:text-white p-2">
                                        <BookOutlined className="text-xl" />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="space-y-4">
                                <Title level={4} className="text-white">Courses</Title>
                                <div className="space-y-2">
                                    <Link to="/courses" className="block text-warm-300 hover:text-white transition-colors">Web Development</Link>
                                    <Link to="/courses" className="block text-warm-300 hover:text-white transition-colors">Data Science</Link>
                                    <Link to="/courses" className="block text-warm-300 hover:text-white transition-colors">Design</Link>
                                    <Link to="/courses" className="block text-warm-300 hover:text-white transition-colors">Business</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="space-y-4">
                                <Title level={4} className="text-white">Company</Title>
                                <div className="space-y-2">
                                    <Link to="/about" className="block text-warm-300 hover:text-white transition-colors">About Us</Link>
                                    <Link to="/careers" className="block text-warm-300 hover:text-white transition-colors">Careers</Link>
                                    <Link to="/blog" className="block text-warm-300 hover:text-white transition-colors">Blog</Link>
                                    <Link to="/contact" className="block text-warm-300 hover:text-white transition-colors">Contact</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                            <div className="space-y-4">
                                <Title level={4} className="text-white">Support</Title>
                                <div className="space-y-2">
                                    <Link to="/help" className="block text-warm-300 hover:text-white transition-colors">Help Center</Link>
                                    <Link to="/terms" className="block text-warm-300 hover:text-white transition-colors">Terms of Service</Link>
                                    <Link to="/privacy" className="block text-warm-300 hover:text-white transition-colors">Privacy Policy</Link>
                                    <Link to="/become-trainer" className="block text-warm-300 hover:text-white transition-colors">Become Instructor</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    <div className="border-t border-warm-600 mt-12 pt-8 text-center">
                        <Text className="text-warm-300">
                            © 2024 LearnHub. All rights reserved. Made with ❤️ for learners worldwide.
                        </Text>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;