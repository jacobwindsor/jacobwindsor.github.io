import { jsPDF } from 'jspdf';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  tags: string[];
}

interface CVData {
  name: string;
  tagline: string;
  email: string;
  linkedin: string;
  github?: string;
  about: string[];
  experiences: ExperienceItem[];
}

export function generateCV() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Define colors - clean black and white
  const black = '#000000'; // Pure black for headings and main text
  const darkGray = '#2a2a2a'; // Dark gray for body text
  const mediumGray = '#555555'; // Medium gray for secondary text
  
  // Page dimensions
  const pageWidth = 210;
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to add text with word wrapping
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number, color: string = darkGray, align: 'left' | 'right' | 'center' | 'justify' = 'left') => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y, { align });
    return lines.length * (fontSize * 0.4); // Return height used
  };

  // Header Section
  doc.setFontSize(28);
  doc.setTextColor(black);
  doc.setFont('helvetica', 'bold');
  yPosition += 8;
  doc.text('Jacob Windsor', margin, yPosition);
  
  yPosition += 7;
  doc.setFontSize(11);
  doc.setTextColor(mediumGray);
  doc.setFont('helvetica', 'normal');
  doc.text('Accelerating scientific discovery through scalable engineering solutions.', margin, yPosition);
  
  yPosition += 9;

  // Contact Information
  const contactInfo = [
    { label: 'Email', value: 'me@jcbwndsr.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/jcbwndsr' }
  ];

  doc.setFontSize(9);
  doc.setTextColor(mediumGray);
  doc.setFont('helvetica', 'normal');
  let contactX = margin;
  contactInfo.forEach((info, index) => {
    if (index > 0) contactX += 50;
    doc.text(`${info.label}: ${info.value}`, contactX, yPosition);
  });
  yPosition += 12;

  // Add line separator
  doc.setDrawColor(0, 0, 0);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // About Section
  doc.setFontSize(14);
  doc.setTextColor(black);
  doc.setFont('helvetica', 'bold');
  doc.text('About', margin, yPosition);
  yPosition += 7;

  doc.setFontSize(10);
  doc.setTextColor(darkGray);
  doc.setFont('helvetica', 'normal');
  const aboutText = `With years of experience in the life sciences domain, I specialize in transforming complex scientific challenges into scalable engineering solutions. My work focuses on building robust data platforms, bioinformatics tools, and infrastructure that enables groundbreaking research.

As a technical leader, I combine deep domain expertise in genomics and bioinformatics with modern software engineering practices. I've built systems that process petabytes of biological data, designed platforms supporting thousands of researchers worldwide, and led teams to deliver high-impact solutions that accelerate scientific discovery.`;
  
  const aboutHeight = addWrappedText(aboutText, margin, yPosition, contentWidth, 10);
  yPosition += aboutHeight + 12;

  // Experience Section
  doc.setFontSize(14);
  doc.setTextColor(black);
  doc.setFont('helvetica', 'bold');
  doc.text('Experience', margin, yPosition);
  yPosition += 10;

  // Experience data (matching the Experience component)
  const experiences: ExperienceItem[] = [
    {
      title: 'Technical Lead',
      company: 'Axiomatic_AI',
      location: 'Barcelona, Spain',
      startDate: 'Feb 2025',
      endDate: null,
      description: 'Leading a cross-functional engineering team building Axiomatic\'s AI platform to accelerate scientific research. Combining AI-driven tools with classical software engineering practices such as Domain-Driven Design to drive rapid innovation. Leading the development and deployment of AI & agentic solutions from MVP to production.',
      tags: ['Technical Leadership', 'AI/ML', 'MLOps', 'Domain-Driven Design', 'Software Infrastructure', 'Team Management']
    },
    {
      title: 'Senior Software Engineer',
      company: 'Qualifyze',
      location: 'Barcelona, Spain',
      startDate: 'Jun 2022',
      endDate: 'Sep 2024',
      description: 'Architected and developed scalable backend systems for a pharmaceutical quality management platform. Applied domain-driven design and hexagonal architecture principles to build maintainable, high-performance solutions. Mentored team members on best practices and architectural patterns.',
      tags: ['Backend Development', 'Domain-Driven Design', 'Hexagonal Architecture', 'TypeScript', 'NestJS', 'React']
    },
    {
      title: 'Software Engineer',
      company: 'European Bioinformatics Institute (EMBL-EBI)',
      location: 'Hinxton, England, United Kingdom',
      startDate: 'Jul 2020',
      endDate: 'Jun 2022',
      description: 'Architected and built the Human Cell Atlas Data Coordination Platform, enabling the ingestion of terabytes of genomic data from laboratories worldwide. Designed horizontally scalable applications using microservice architecture. Initiated and led the modernization of Git workflows and CI/CD processes adopted across the organization.',
      tags: ['Full-Stack Development', 'Microservices', 'Kubernetes', 'DevOps', 'TypeScript', 'Java', 'Angular', 'Python']
    },
    {
      title: 'Masters Degree Intern',
      company: 'Centre for Genomic Regulation',
      location: 'Barcelona, Spain',
      startDate: 'Oct 2019',
      endDate: 'Jul 2020',
      description: 'Developed bioinformatics tools for third-generation sequencing platforms, including tmerge, to improve transcriptome analysis accuracy. Designed and implemented computational pipelines using advanced algorithms with Python, Nextflow, R, Snakemake, and Shiny.',
      tags: ['Bioinformatics', 'Python', 'R', 'Nextflow', 'Snakemake', 'RNA-Seq Analysis']
    },
    {
      title: 'Software Engineer',
      company: 'Abcam',
      location: 'Cambridge, United Kingdom',
      startDate: 'Nov 2017',
      endDate: 'Dec 2018',
      description: 'Developed front-end solutions for abcam.com, serving millions of researchers worldwide. Led a comprehensive front-end modernization initiative, migrating the codebase to Webpack, Babel, and contemporary JavaScript tooling. Established functional programming practices and mentored team members on modern JavaScript development.',
      tags: ['Frontend Development', 'JavaScript', 'Webpack', 'Functional Programming', 'Team Training']
    }
  ];

  experiences.forEach((exp, index) => {
    // Check if we need a new page
    if (yPosition > 270) {
      doc.addPage();
      yPosition = margin;
    }

    // Job Title and Company
    doc.setFontSize(12);
    doc.setTextColor(black);
    doc.setFont('helvetica', 'bold');
    doc.text(exp.title, margin, yPosition);
    
    const companyX = margin + 85;
    doc.setFontSize(10);
    doc.setTextColor(darkGray);
    doc.setFont('helvetica', 'normal');
    doc.text(exp.company, companyX, yPosition);
    yPosition += 5;

    // Date and Location
    doc.setFontSize(9);
    doc.setTextColor(mediumGray);
    doc.setFont('helvetica', 'normal');
    const dateRange = `${exp.startDate} - ${exp.endDate || 'Present'}`;
    doc.text(dateRange, margin, yPosition);
    doc.text(exp.location, companyX, yPosition);
    yPosition += 7;

    // Description
    const cleanDescription = exp.description
      .replace(/<a[^>]*>([^<]*)<\/a>/g, '$1') // Remove anchor tags, keep text
      .replace(/<[^>]+>/g, ''); // Remove any remaining HTML tags
    
    doc.setFontSize(9.5);
    doc.setTextColor(darkGray);
    doc.setFont('helvetica', 'normal');
    const descHeight = addWrappedText(cleanDescription, margin, yPosition, contentWidth, 9.5);
    yPosition += descHeight + 5;

    // Tags/Skills
    doc.setFontSize(8.5);
    doc.setTextColor(mediumGray);
    doc.setFont('helvetica', 'normal');
    const tagsText = exp.tags.join(' • ');
    const tagsHeight = addWrappedText(tagsText, margin, yPosition, contentWidth, 8.5);
    yPosition += tagsHeight + 12;

    // Add separator line between experiences (except last)
    if (index < experiences.length - 1) {
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.1);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 8;
    }
  });

  // Awards Section
  if (yPosition > 250) {
    doc.addPage();
    yPosition = margin;
  }
  
  yPosition += 5;
  doc.setFontSize(14);
  doc.setTextColor(black);
  doc.setFont('helvetica', 'bold');
  doc.text('Awards', margin, yPosition);
  yPosition += 10;

  const awards = [
    {
      title: 'Student Award, Maastricht University',
      year: '2017',
      description: 'Awarded for work on WikiPathways'
    },
    {
      title: 'Best Bachelor Thesis, Maastricht Science Programme',
      year: '2017',
      description: 'Awarded best thesis for my work at BiGCaT on "Extending WikiPathways to Improve Educational Capabilities - Working Towards Interactive Pathway Stories". Achieved a grade of 9.2 out of 10'
    }
  ];

  awards.forEach((award, index) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = margin;
    }

    // Award Title
    doc.setFontSize(11);
    doc.setTextColor(black);
    doc.setFont('helvetica', 'bold');
    doc.text(award.title, margin, yPosition);
    
    // Year (right aligned)
    doc.setFontSize(9);
    doc.setTextColor(mediumGray);
    doc.setFont('helvetica', 'normal');
    doc.text(award.year, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 5;

    // Description
    doc.setFontSize(9.5);
    doc.setTextColor(darkGray);
    doc.setFont('helvetica', 'normal');
    const descHeight = addWrappedText(award.description, margin, yPosition, contentWidth, 9.5);
    yPosition += descHeight + 10;

    // Separator line between awards (except last)
    if (index < awards.length - 1) {
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.1);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 8;
    }
  });

  // Education Section
  if (yPosition > 250) {
    doc.addPage();
    yPosition = margin;
  } else {
    yPosition += 5;
  }
  
  doc.setFontSize(14);
  doc.setTextColor(black);
  doc.setFont('helvetica', 'bold');
  doc.text('Education', margin, yPosition);
  yPosition += 10;

  const education = [
    {
      degree: 'MMRes',
      institution: 'Barcelona Institute of Science & Technology',
      university: 'Universitat Pompeu Fabra',
      years: '2019 - 2021'
    },
    {
      degree: 'BSc (cum laude) Maastricht Science Programme',
      institution: '',
      university: 'Maastricht University',
      years: '2014 - 2017'
    }
  ];

  education.forEach((edu, index) => {
    if (yPosition > 270) {
      doc.addPage();
      yPosition = margin;
    }

    // Degree
    doc.setFontSize(11);
    doc.setTextColor(black);
    doc.setFont('helvetica', 'bold');
    doc.text(edu.degree, margin, yPosition);
    
    // Years (right aligned)
    doc.setFontSize(9);
    doc.setTextColor(mediumGray);
    doc.setFont('helvetica', 'normal');
    doc.text(edu.years, pageWidth - margin, yPosition, { align: 'right' });
    yPosition += 5;

    // Institution/University
    doc.setFontSize(10);
    doc.setTextColor(darkGray);
    doc.setFont('helvetica', 'normal');
    const institutionText = edu.institution 
      ? `${edu.institution}, ${edu.university}` 
      : edu.university;
    doc.text(institutionText, margin, yPosition);
    yPosition += 12;

    // Separator line between education items (except last)
    if (index < education.length - 1) {
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.1);
      doc.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 8;
    }
  });

  // References Section
  if (yPosition > 260) {
    doc.addPage();
    yPosition = margin;
  } else {
    yPosition += 5;
  }
  
  doc.setFontSize(14);
  doc.setTextColor(black);
  doc.setFont('helvetica', 'bold');
  doc.text('References', margin, yPosition);
  yPosition += 8;

  doc.setFontSize(10);
  doc.setTextColor(darkGray);
  doc.setFont('helvetica', 'normal');
  doc.text('Available on request', margin, yPosition);

  // Save the PDF
  doc.save('Jacob_Windsor_CV.pdf');
}
