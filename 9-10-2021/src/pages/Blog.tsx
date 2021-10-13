import React from 'react'
import BlogImg from './BlogImg'
import BlogMeta from './BlogMeta'
import BlogText from './BlogText'
import SectionHeader from './SectionHeader'

export default function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <SectionHeader title="Our Blog" heading="Latest news & articles" />
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <BlogImg src="img/blog-1.jpg" date={{ dd: "01", mm: "jan", yy: "2045" }} />
                            <BlogText heading="Lorem ipsum dolor sit amet" data=" Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper" />
                            <BlogMeta user="Admin" folder="Web Design" comment="15 Comments" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <BlogImg src="img/blog-2.jpg" date={{ dd: "11", mm: "jan", yy: "1045" }} />
                            <BlogText heading="Lorem ipsum dolor sit amet" data=" Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper" />
                            <BlogMeta user="user1" folder="Mechanic" comment="11 Comments" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <BlogImg src="img/blog-3.jpg" date={{ dd: "22", mm: "jan", yy: "3045" }} />
                            <BlogText heading="Lorem ipsum dolor sit amet" data=" Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper" />
                            <BlogMeta user="user2" folder="Machine" comment="25 Comments" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
