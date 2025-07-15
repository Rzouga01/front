  import React from 'react';
  import { Link } from 'react-router-dom';
  import { Button, Card, Tag, Rate, Row, Col } from 'antd';
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
      ThunderboltOutlined
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