# CETech - Computer Engineering & Technology Portfolio Hub

A modern web application designed to showcase and celebrate the academic achievements and personal portfolios of computer engineering and technology students. This platform provides an elegant, responsive interface for displaying student portfolios with comprehensive statistics and interactive features.

## Description

CETech serves as a centralized portfolio showcase platform for the Computer Engineering and Technology Programme, supporting students from various universities including Chulalongkorn University and King Mongkut's Institute of Technology Ladkrabang. The application features a clean, modern design with university-specific branding and provides tools for content creation, portfolio display, and performance analytics.

The platform is built with modern web technologies to ensure optimal performance, accessibility, and user experience across all devices. It includes features for portfolio management, social media integration, and comprehensive statistics tracking.

## Key Features

### 🎨 **Portfolio Showcase**
- **Dynamic Portfolio Grid**: Responsive grid layout displaying student portfolios with photos and descriptions
- **Individual Portfolio Pages**: Detailed view of each student's work with PDF integration
- **University Branding**: Custom color schemes and seals for different universities
- **Social Media Integration**: Direct links to Instagram, Facebook, and GitHub profiles

### 📊 **Statistics & Analytics**
- **Comprehensive Dashboard**: Real-time statistics on student distribution across universities and majors
- **Interactive Charts**: Visual representation of enrollment data and program distribution
- **Performance Metrics**: Tracking of portfolio views and engagement statistics

### 🛠️ **Creator Tools**
- **Portfolio Creator**: Intuitive interface for building and managing portfolio content
- **Gradient Preview Tool**: Interactive design tool for exploring color schemes and gradients
- **Content Management**: Easy-to-use system for updating portfolio information

### 🎯 **User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Theme switching with smooth transitions
- **Accessibility**: Built with accessibility best practices in mind
- **Performance**: Fast loading times with Next.js optimization

### 🏫 **University Integration**
- **Multi-University Support**: Support for multiple universities with custom branding
- **Program Tracking**: Detailed statistics on different programs and majors
- **Institutional Seals**: Official university seals and logos integration

## Technologies Used

### **Frontend Framework**
- **Next.js 15.2.4**: React framework with App Router for optimal performance
- **React 19**: Latest version for modern component architecture
- **TypeScript**: Type-safe development with enhanced developer experience

### **Styling & UI**
- **Tailwind CSS 3.4.17**: Utility-first CSS framework for rapid development
- **Shadcn/ui**: High-quality, accessible UI components built on Radix UI
- **Lucide React**: Beautiful, customizable icons
- **Tailwind CSS Animate**: Smooth animations and transitions

### **UI Components & Libraries**
- **Radix UI**: Unstyled, accessible UI primitives
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation
- **Recharts**: Composable charting library for statistics
- **Embla Carousel**: Lightweight carousel component
- **Sonner**: Toast notifications for better UX

### **Development Tools**
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing
- **ESLint**: Code linting and quality assurance

## Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm, yarn, or pnpm package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cetech.git
   cd cetech
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
cetech/
├── app/                          # Next.js App Router pages
│   ├── creator/                  # Portfolio creator page
│   ├── gradient-preview/         # Gradient preview tool
│   ├── portfolio/                # Individual portfolio pages
│   ├── statistics/               # Statistics and analytics page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Homepage
├── components/                   # Reusable React components
│   ├── ui/                      # Shadcn/ui components
│   ├── navigation.tsx           # Navigation component
│   ├── hero-section.tsx         # Hero section component
│   ├── featured-portfolios.tsx  # Portfolio grid component
│   ├── stats-overview.tsx       # Statistics overview
│   └── university-partners.tsx  # University partners section
├── lib/                         # Utility functions and data
│   ├── portfolio-data.ts        # Portfolio data management
│   ├── types.ts                 # TypeScript type definitions
│   ├── university-colors.ts     # University color schemes
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
│   ├── photos/                  # Student profile photos
│   ├── portfolios/              # PDF portfolio files
│   └── seals/                   # University seals and logos
├── styles/                      # Additional stylesheets
└── tailwind.config.ts          # Tailwind CSS configuration
```

### Key Directories Explained

- **`app/`**: Contains all pages using Next.js 13+ App Router
- **`components/`**: Reusable React components organized by functionality
- **`lib/`**: Core utilities, data management, and type definitions
- **`public/`**: Static assets including images, PDFs, and university branding
- **`components/ui/`**: Shadcn/ui components for consistent design system

### Data Management

The application uses a centralized data structure in `lib/portfolio-data.ts` that includes:
- Student information (name, photo, description)
- Academic details (university, major, program)
- Social media links
- Portfolio PDF files
- University branding and seals

This structure allows for easy maintenance and updates while maintaining consistency across the platform.
