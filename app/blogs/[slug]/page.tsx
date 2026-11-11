import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blogs";
import BlogPostView from "@/components/Blogs/BlogPostView";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Blog Not Found | Al Rahmaniah Auto Accessories" };
  }

  return {
    title: `${post.title} | Al Rahmaniah Auto Accessories Sharjah`,
    description: post.excerpt,
    keywords: [
      post.title,
      post.category,
      "car accessories Sharjah",
      "custom car upholstery UAE",
      "auto styling Sharjah",
      "Al Rahmaniah Auto Accessories",
    ],
    alternates: {
      canonical: `https://alrahmaniahauto.ae/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <BlogPostView slug={slug} />
    </main>
  );
}
