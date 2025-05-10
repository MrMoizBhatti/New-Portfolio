import React from 'react';
// import Card, { CardImage, CardBody } from '';
import Card, { CardImage, CardBody } from '@/app/ui/Card';
import { Calendar, User, ArrowRight } from 'lucide-react';

const FeaturedPost = ({ post }) => {
  if (!post) return null;

  const safePost = {
    image: post.image || '/images/default-blog.jpg',
    title: post.title || 'Untitled Post',
    date: post.date || 'No date',
    author: post.author || 'Anonymous',
    excerpt: post.excerpt || '',
    tags: post.tags || [],
    id: post.id || 0
  };

  return (
    <Card className="md:col-span-3 flex flex-col md:flex-row h-full">
      <CardImage
        src={safePost.image}
        alt={safePost.title}
        className="md:w-1/2 h-64 md:h-auto"
      />
      <CardBody className="md:w-1/2">
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            {safePost.date}
          </span>
          <span className="flex items-center">
            <User size={14} className="mr-1" />
            {safePost.author}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3">{safePost.title}</h3>
        <p className="text-gray-600 mb-4">{safePost.excerpt}</p>
        {safePost.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {safePost.tags.map((tag, idx) => (
              <span key={idx} className="inline-block px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        <a
          href={`/blog/${safePost.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </a>
      </CardBody>
    </Card>
  );
};

export default FeaturedPost;