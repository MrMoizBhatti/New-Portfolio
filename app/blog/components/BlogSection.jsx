import React from 'react';
import Section from '@/app/ui/Section';
import FeaturedPost from './FeaturedPost';
import PostCard from './PostCard';
import { blogData } from '@/app/utils/blogData';

const BlogSection = () => {
  const validPosts = blogData.filter(post => post && post.image);

  return (
    <Section id="blog" title="Blog & Insights" subtitle="...">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {validPosts.length > 0 && <FeaturedPost post={validPosts[0]} />}
        {validPosts.slice(1).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;