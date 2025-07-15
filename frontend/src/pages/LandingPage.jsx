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
    FireOutlined,
    CrownOutlined
} from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import Logo from '../components/Logo';

const { Title, Text, Paragraph } = Typography;

const LandingPage = () => {
    const { user } = useAuth();

    const featuredCourses = [
        {
            id: 1,
            title: 'Complete React Developer Course',
            instructor: 'Sarah Johnson',
            instructorAvatar: '👩‍💻',
            rating: 4.9,
            students: 15420,
            duration: '24 hours',
            level: 'Intermediate',
            price: 89,
            originalPrice: 149,
            thumbnail: '⚛️',
            category: 'Web Development',
            description: 'Master React from basics to advanced concepts with real-world projects.',
            skills: ['React', 'Redux', 'Hooks', 'Context API'],
            bestseller: true
        },
        {
            id: 2,
            title: 'Machine Learning with Python',
            instructor: 'Dr. Michael Chen',
            instructorAvatar: '👨‍🔬',
            rating: 4.8,
            students: 12350,
            duration: '32 hours',
            level: 'Advanced',
            price: 129,
            originalPrice: 199,
            thumbnail: '🤖',
            category: 'Data Science',
            description: 'Learn ML algorithms and build intelligent applications.',
            skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
            bestseller: false
        },
        {
            id: 3,
            title: 'UI/UX Design Fundamentals',
            instructor: 'Emma Rodriguez',
            instructorAvatar: '👩‍🎨',
            rating: 4.9,
            students: 18750,
            duration: '16 hours',
            level: 'Beginner',
            price: 69,
            originalPrice: 99,
            thumbnail: '🎨',
            category: 'Design',
            description: 'Create beautiful and user-friendly digital experiences.',
            skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
            bestseller: true
        }
    ];

    const features = [
        {
            icon: <BookOutlined className="text-4xl text-terracotta-500" />,
            title: 'Expert-Led Courses',
            description: 'Learn from industry professionals with years of real-world experience.',
            color: 'bg-terracotta-50 dark:bg-terracotta-900'
        },
        {
            icon: <SafetyCertificateOutlined className="text-4xl text-sage-500" />,
            title: 'Verified Certificates',
            description: 'Earn industry-recognized certificates to boost your career prospects.',
            color: 'bg-sage-50 dark:bg-sage-900'
        },
        {
            icon: <GlobalOutlined className="text-4xl text-mustard-500" />,
            title: 'Learn Anywhere',
            description: 'Access courses from any device, anywhere in the world, anytime.',
            color: 'bg-mustard-50 dark:bg-mustard-900'
        },
        {
            icon: <TeamOutlined className="text-4xl text-olive-500" />,
            title: 'Community Support',
            description: 'Join a vibrant community of learners and get help when you need it.',
            color: 'bg-olive-50 dark:bg-olive-900'
        }
    ];

    const testimonials = [
        {
            name: 'Alex Thompson',
            role: 'Software Engineer at Google',
            avatar: '👨‍💻',
            content: 'LearnHub transformed my career. The React course helped me land my dream job at Google!',
            rating: 5
        },
        {
            name: 'Maria Garcia',
            role: 'UX Designer at Apple',
            avatar: '👩‍🎨',
            content: 'The design courses are incredibly practical. I use what I learned every day at Apple.',
            rating: 5
        },
        {
            name: 'David Kim',
            role: 'Data Scientist at Netflix',
            avatar: '👨‍🔬',
            content: 'The ML course gave me the foundation I needed to transition into data science at Netflix.',
            rating: 5
        }
    ];

    const stats = [
        { title: 'Students Worldwide', value: '500K+', icon: <UserOutlined /> },
        { title: 'Expert Instructors', value: '1,200+', icon: <TeamOutlined /> },
        { title: 'Courses Available', value: '10,000+', icon: <BookOutlined /> },
        { title: 'Success Rate', value: '95%', icon: <TrophyOutlined /> }
    ];

    return (
        <div className="min-h-screen bg-cream-100 dark:bg-charcoal-500 transition-colors duration-300">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-warm-900/80 backdrop-blur-xl border-b border-warm-200 dark:border-warm-700">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Logo size="large" showText={true} />
                        
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link to="/courses" className="text-warm-600 dark:text-warm-300 hover:text-terracotta-500 transition-colors">
                                Courses
                            </Link>
                            <Link to="/about" className="text-warm-600 dark:text-warm-300 hover:text-terracotta-500 transition-colors">
                                About
                            </Link>
                            <Link to="/pricing" className="text-warm-600 dark:text-warm-300 hover:text-terracotta-500 transition-colors">
                                Pricing
                            </Link>
                            <Link to="/contact" className="text-warm-600 dark:text-warm-300 hover:text-terracotta-500 transition-colors">
                                Contact
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <ThemeToggle inline={true} />
                            {user ? (
                                <Link to="/dashboard">
                                    <Button type="primary" className="bg-terracotta-500 hover:bg-terracotta-600 border-terracotta-500">
                                        Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link to="/login">
                                        <Button className="text-terracotta-500 border-terracotta-500 hover:bg-terracotta-50 dark:hover:bg-terracotta-900">
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button type="primary" className="bg-terracotta-500 hover:bg-terracotta-600 border-terracotta-500">
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
            <section className="relative overflow-hidden bg-gradient-to-br from-terracotta-50 via-cream-50 to-sage-50 dark:from-charcoal-600 dark:via-warm-800 dark:to-sage-900">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta-200 dark:bg-terracotta-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-sage-200 dark:bg-sage-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-mustard-200 dark:bg-mustard-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-terracotta-100 dark:bg-terracotta-900 rounded-full text-terracotta-700 dark:text-terracotta-300 text-sm font-medium">
                                <FireOutlined className="mr-2" />
                                Join 500,000+ learners worldwide
                            </div>
                            
                            <Title level={1} className="text-5xl lg:text-7xl font-bold text-charcoal-500 dark:text-cream-100 leading-tight">
                                Master New Skills
                                <br />
                                <span className="bg-gradient-to-r from-terracotta-500 to-sage-500 bg-clip-text text-transparent">
                                    Transform Your Career
                                </span>
                            </Title>
                            
                            <Paragraph className="text-xl lg:text-2xl text-warm-600 dark:text-warm-300 max-w-3xl mx-auto leading-relaxed">
                                Learn from industry experts, build real projects, and advance your career with our comprehensive online courses.
                            </Paragraph>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/register">
                                <Button 
                                    type="primary" 
                                    size="large" 
                                    icon={<RocketOutlined />}
                                    className="h-14 px-8 text-lg font-semibold bg-terracotta-500 hover:bg-terracotta-600 border-terracotta-500 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Start Learning Today
                                </Button>
                            </Link>
                            <Link to="/courses">
                                <Button 
                                    size="large" 
                                    icon={<PlayCircleOutlined />}
                                    className="h-14 px-8 text-lg font-semibold text-sage-600 dark:text-sage-400 border-sage-500 hover:bg-sage-50 dark:hover:bg-sage-900 transition-all duration-300"
                                >
                                    Browse Courses
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-sm text-warm-500 dark:text-warm-400">
                            <div className="flex items-center">
                                <CheckCircleOutlined className="text-olive-500 mr-2" />
                                Free trial available
                            </div>
                            <div className="flex items-center">
                                <CheckCircleOutlined className="text-olive-500 mr-2" />
                                No credit card required
                            </div>
                            <div className="flex items-center">
                                <CheckCircleOutlined className="text-olive-500 mr-2" />
                                Cancel anytime
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white dark:bg-warm-900">
                <div className="max-w-7xl mx-auto px-6">
                    <Row gutter={[32, 32]}>
                        {stats.map((stat, index) => (
                            <Col key={index} xs={24} sm={12} lg={6}>
                                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-cream-50 to-white dark:from-warm-800 dark:to-warm-900">
                                    <div className="text-4xl text-terracotta-500 mb-4">
                                        {stat.icon}
                                    </div>
                                    <Statistic
                                        title={<span className="text-warm-600 dark:text-warm-300">{stat.title}</span>}
                                        value={stat.value}
                                        valueStyle={{ 
                                            color: '#E76F51', 
                                            fontSize: '2rem', 
                                            fontWeight: 'bold' 
                                        }}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-20 bg-cream-50 dark:bg-charcoal-600">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Title level={2} className="text-4xl font-bold text-charcoal-500 dark:text-cream-100 mb-4">
                            Featured Courses
                        </Title>
                        <Paragraph className="text-xl text-warm-600 dark:text-warm-300 max-w-2xl mx-auto">
                            Discover our most popular courses taught by industry experts
                        </Paragraph>
                    </div>

                    <Row gutter={[32, 32]}>
                        {featuredCourses.map((course) => (
                            <Col key={course.id} xs={24} lg={8}>
                                <Card 
                                    className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-warm-900"
                                    cover={
                                        <div className="relative p-8 bg-gradient-to-br from-terracotta-100 to-sage-100 dark:from-terracotta-900 dark:to-sage-900">
                                            {course.bestseller && (
                                                <div className="absolute top-4 left-4">
                                                    <Tag className="bg-saffron-500 text-white border-0 font-semibold">
                                                        <CrownOutlined className="mr-1" />
                                                        Bestseller
                                                    </Tag>
                                                </div>
                                            )}
                                            <div className="text-center">
                                                <div className="text-6xl mb-4">{course.thumbnail}</div>
                                                <Tag className="bg-terracotta-100 dark:bg-terracotta-900 text-terracotta-700 dark:text-terracotta-300 border-0">
                                                    {course.category}
                                                </Tag>
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="p-2 space-y-4">
                                        <div>
                                            <Title level={4} className="text-charcoal-500 dark:text-cream-100 mb-2 line-clamp-2">
                                                {course.title}
                                            </Title>
                                            <Paragraph className="text-warm-600 dark:text-warm-300 text-sm line-clamp-2">
                                                {course.description}
                                            </Paragraph>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <div className="text-2xl">{course.instructorAvatar}</div>
                                            <div>
                                                <Text className="text-charcoal-500 dark:text-cream-100 font-medium block">
                                                    {course.instructor}
                                                </Text>
                                                <div className="flex items-center space-x-2">
                                                    <Rate disabled value={course.rating} className="text-xs" />
                                                    <Text className="text-warm-500 dark:text-warm-300 text-sm">
                                                        ({course.students.toLocaleString()})
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {course.skills.slice(0, 3).map((skill) => (
                                                <Tag key={skill} className="bg-sage-100 dark:bg-sage-900 text-sage-700 dark:text-sage-300 border-0 text-xs">
                                                    {skill}
                                                </Tag>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between text-sm text-warm-500 dark:text-warm-300">
                                            <div className="flex items-center">
                                                <ClockCircleOutlined className="mr-1" />
                                                {course.duration}
                                            </div>
                                            <Tag className={`border-0 ${
                                                course.level === 'Beginner' ? 'bg-olive-100 dark:bg-olive-900 text-olive-700 dark:text-olive-300' :
                                                course.level === 'Intermediate' ? 'bg-saffron-100 dark:bg-saffron-900 text-saffron-700 dark:text-saffron-300' :
                                                'bg-rust-100 dark:bg-rust-900 text-rust-700 dark:text-rust-300'
                                            }`}>
                                                {course.level}
                                            </Tag>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-warm-200 dark:border-warm-700">
                                            <div>
                                                <Text className="text-warm-500 dark:text-warm-300 text-sm line-through">
                                                    ${course.originalPrice}
                                                </Text>
                                                <Text className="text-2xl font-bold text-terracotta-500 ml-2">
                                                    ${course.price}
                                                </Text>
                                            </div>
                                            <Link to={`/courses/${course.id}`}>
                                                <Button 
                                                    type="primary" 
                                                    className="bg-terracotta-500 hover:bg-terracotta-600 border-terracotta-500"
                                                >
                                                    Enroll Now
                                                </Button>
                                            </Link>
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
                                className="h-12 px-8 text-sage-600 dark:text-sage-400 border-sage-500 hover:bg-sage-50 dark:hover:bg-sage-900"
                            >
                                View All Courses
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-warm-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Title level={2} className="text-4xl font-bold text-charcoal-500 dark:text-cream-100 mb-4">
                            Why Choose LearnHub?
                        </Title>
                        <Paragraph className="text-xl text-warm-600 dark:text-warm-300 max-w-2xl mx-auto">
                            We provide everything you need to succeed in your learning journey
                        </Paragraph>
                    </div>

                    <Row gutter={[32, 32]}>
                        {features.map((feature, index) => (
                            <Col key={index} xs={24} sm={12} lg={6}>
                                <Card className={`text-center border-0 h-full ${feature.color} hover:shadow-lg transition-all duration-300`}>
                                    <div className="p-6 space-y-4">
                                        <div className="flex justify-center">
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
            <section className="py-20 bg-gradient-to-br from-sage-50 to-terracotta-50 dark:from-sage-900 dark:to-terracotta-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Title level={2} className="text-4xl font-bold text-charcoal-500 dark:text-cream-100 mb-4">
                            Success Stories
                        </Title>
                        <Paragraph className="text-xl text-warm-600 dark:text-warm-300 max-w-2xl mx-auto">
                            See how our students have transformed their careers
                        </Paragraph>
                    </div>

                    <Row gutter={[32, 32]}>
                        {testimonials.map((testimonial, index) => (
                            <Col key={index} xs={24} lg={8}>
                                <Card className="h-full border-0 shadow-lg bg-white dark:bg-warm-900">
                                    <div className="p-6 space-y-4">
                                        <Rate disabled value={testimonial.rating} className="text-saffron-500" />
                                        <Paragraph className="text-warm-600 dark:text-warm-300 text-lg italic">
                                            "{testimonial.content}"
                                        </Paragraph>
                                        <div className="flex items-center space-x-3">
                                            <div className="text-3xl">{testimonial.avatar}</div>
                                            <div>
                                                <Text className="text-charcoal-500 dark:text-cream-100 font-semibold block">
                                                    {testimonial.name}
                                                </Text>
                                                <Text className="text-warm-500 dark:text-warm-300 text-sm">
                                                    {testimonial.role}
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
            <section className="py-20 bg-gradient-to-r from-terracotta-500 to-sage-500">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Title level={2} className="text-4xl lg:text-5xl font-bold text-white">
                                Ready to Start Your Journey?
                            </Title>
                            <Paragraph className="text-xl text-white/90 max-w-2xl mx-auto">
                                Join thousands of students who have already transformed their careers with LearnHub.
                            </Paragraph>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/register">
                                <Button 
                                    type="primary" 
                                    size="large" 
                                    icon={<RocketOutlined />}
                                    className="h-14 px-8 text-lg font-semibold bg-white text-terracotta-500 border-white hover:bg-cream-100 hover:border-cream-100"
                                >
                                    Get Started Free
                                </Button>
                            </Link>
                            <Link to="/become-trainer">
                                <Button 
                                    size="large" 
                                    icon={<TeamOutlined />}
                                    className="h-14 px-8 text-lg font-semibold text-white border-white hover:bg-white/10"
                                >
                                    Become a Trainer
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-sm text-white/80">
                            <div className="flex items-center">
                                <CheckCircleOutlined className="mr-2" />
                                14-day free trial
                            </div>
                            <div className="flex items-center">
                                <CheckCircleOutlined className="mr-2" />
                                No setup fees
                            </div>
                            <div className="flex items-center">
                                <CheckCircleOutlined className="mr-2" />
                                Cancel anytime
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-charcoal-500 dark:bg-charcoal-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <Row gutter={[32, 32]}>
                        <Col xs={24} lg={8}>
                            <div className="space-y-4">
                                <Logo size="large" showText={true} style={{ color: 'white' }} />
                                <Paragraph className="text-warm-300 max-w-sm">
                                    Empowering learners worldwide with high-quality, accessible education from industry experts.
                                </Paragraph>
                                <div className="flex space-x-4">
                                    <Button type="text" className="text-warm-300 hover:text-white p-2">
                                        📘
                                    </Button>
                                    <Button type="text" className="text-warm-300 hover:text-white p-2">
                                        🐦
                                    </Button>
                                    <Button type="text" className="text-warm-300 hover:text-white p-2">
                                        💼
                                    </Button>
                                    <Button type="text" className="text-warm-300 hover:text-white p-2">
                                        📸
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} sm={8} lg={4}>
                            <div className="space-y-4">
                                <Title level={4} className="text-white">Platform</Title>
                                <div className="space-y-2">
                                    <Link to="/courses" className="block text-warm-300 hover:text-white transition-colors">
                                        Browse Courses
                                    </Link>
                                    <Link to="/pricing" className="block text-warm-300 hover:text-white transition-colors">
                                        Pricing
                                    </Link>
                                    <Link to="/become-trainer" className="block text-warm-300 hover:text-white transition-colors">
                                        Teach on LearnHub
                                    </Link>
                                    <Link to="/mobile" className="block text-warm-300 hover:text-white transition-colors">
                                        Mobile App
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} sm={8} lg={4}>
                            <div className="space-y-4">
                                <Title level={4} className="text-white">Company</Title>
                                <div className="space-y-2">
                                    <Link to="/about" className="block text-warm-300 hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                    <Link to="/careers" className="block text-warm-300 hover:text-white transition-colors">
                                        Careers
                                    </Link>
                                    <Link to="/blog" className="block text-warm-300 hover:text-white transition-colors">
                                        Blog
                                    </Link>
                                    <Link to="/press" className="block text-warm-300 hover:text-white transition-colors">
                                        Press
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} sm={8} lg={4}>
                            <div className="space-y-4">
                                <Title level={4} className="text-white">Support</Title>
                                <div className="space-y-2">
                                    <Link to="/help" className="block text-warm-300 hover:text-white transition-colors">
                                        Help Center
                                    </Link>
                                    <Link to="/contact" className="block text-warm-300 hover:text-white transition-colors">
                                        Contact Us
                                    </Link>
                                    <Link to="/community" className="block text-warm-300 hover:text-white transition-colors">
                                        Community
                                    </Link>
                                    <Link to="/status" className="block text-warm-300 hover:text-white transition-colors">
                                        System Status
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        <Col xs={24} sm={8} lg={4}>
                            <div className="space-y-4">
                                <Title level={4} className="text-white">Legal</Title>
                                <div className="space-y-2">
                                    <Link to="/privacy" className="block text-warm-300 hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                    <Link to="/terms" className="block text-warm-300 hover:text-white transition-colors">
                                        Terms of Service
                                    </Link>
                                    <Link to="/cookies" className="block text-warm-300 hover:text-white transition-colors">
                                        Cookie Policy
                                    </Link>
                                    <Link to="/accessibility" className="block text-warm-300 hover:text-white transition-colors">
                                        Accessibility
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className="border-t border-warm-700 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <Text className="text-warm-300">
                                © 2024 LearnHub. All rights reserved.
                            </Text>
                            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                                <Text className="text-warm-300 text-sm">
                                    Made with <HeartOutlined className="text-terracotta-400 mx-1" /> for learners worldwide
                                </Text>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;