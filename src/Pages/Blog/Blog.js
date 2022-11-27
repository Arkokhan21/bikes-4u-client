import React from 'react';

const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                        20 Nov 2022
                    </p>
                    <div className="mb-3">
                        <span
                            className="inline-block text-black"
                        >
                            <p className="font-sans text-xl font-extrabold lg:text-4xl xl:text-5xl">
                                What are the different ways to manage a state in a React application?
                            </p>
                        </span>
                    </div>
                    <p className="my-5 text-base text-gray-700 md:text-lg">
                        There are four main types of state you need to properly manage in your React apps:
                        Local state, Global state, Server state, URL state.
                    </p>
                    <div className="flex items-center">
                        <div>
                            <span
                                className="font-semibold text-gray-800 "
                            >
                                Bruce Banner
                            </span>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-8 lg:col-span-3">
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            18 Aug 2022
                        </p>
                        <div className="mb-3">
                            <span
                                className="inline-block text-black"
                            >
                                <p className="font-sans text-xl font-extrabold lg:text-2xl">
                                    How does prototypical inheritance work?
                                </p>
                            </span>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                        </p>
                        <div className="flex items-center">
                            <div>
                                <span

                                    className="font-semibold text-gray-800"
                                >
                                    Peter Parker
                                </span>
                                <p className="text-sm font-medium text-gray-600">
                                    Author
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            26 Oct 2022
                        </p>
                        <div className="mb-3">
                            <span
                                className="inline-block text-black"
                            >
                                <p className="font-sans text-xl font-extrabold lg:text-2xl">
                                    What is a unit test? Why should we write unit tests?
                                </p>
                            </span>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>
                        <div className="flex items-center">
                            <div>
                                <span

                                    className="font-semibold text-gray-800"
                                >
                                    Tony Stark
                                </span>
                                <p className="text-sm font-medium text-gray-600">
                                    Author
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            29 Dec 2022
                        </p>
                        <div className="mb-3">
                            <span
                                className="inline-block text-black"
                            >
                                <p className="font-sans text-xl font-extrabold lg:text-2xl">
                                    React vs. Angular vs. Vue?
                                </p>
                            </span>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option
                        </p>
                        <div className="flex items-center">
                            <div>
                                <span

                                    className="font-semibold text-gray-800"
                                >
                                    Tony Bruce
                                </span>
                                <p className="text-sm font-medium text-gray-600">
                                    Author
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span
                        className="inline-flex font-semibold text-gray-800 cursor-pointer"
                    >
                        See all articles
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Blog;