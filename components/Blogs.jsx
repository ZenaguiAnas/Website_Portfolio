import React from "react";
import styles from "./Main.module.css";

const blogs = [
  {
    title: 'Understanding the SOLID Principles in Software Engineering',
    url: 'https://medium.com/@zenaguianas/understanding-the-solid-principles-in-software-engineering-a-detailed-guide-with-java-examples-3bbcb6e632a4',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*c2jZ1uZMZhsKRf6tmIPkAw.png',
    description: 'A detailed guide to understanding the SOLID principles in software engineering with Java examples.',
  },
  {
    title: 'Stateful vs Stateless Applications: An In-Depth Guide',
    url: 'https://medium.com/@zenaguianas/stateful-vs-stateless-applications-an-in-depth-guide-b26f33adb5b9',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*NBjy5R5IkoEUVqQeIxrPeA.png',
    description: 'A comprehensive guide comparing stateful and stateless applications, with examples and use cases.',
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className={styles.blogsSection}>
      <h2 className={styles.sectionTitle}>Recent Blogs</h2>
      <div className={styles.blogsGrid}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            <img src={blog.image} alt={blog.title} className={styles.blogImage} />
            <div className={styles.blogContent}>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.blogDescription}>{blog.description}</p>
              <a href={blog.url} target="_blank" rel="noopener noreferrer" className={styles.readMore}>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
