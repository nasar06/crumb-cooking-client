import { Accordion } from 'flowbite-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Accordion className='my-24'>
                <Accordion.Panel>
                    <Accordion.Title>
                        Difference between SQL and NoSQL?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                            A SQL Database follows a table like structure which can have an
                            unlimited number of rows and every data present inside the database
                            is properly structured with Predefined Schemas, it is basically used
                            to manipulate Relational Databases Management Systems.


                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-left">
                            A NoSQL Database is a Distributed Database where the data is very
                            unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited
                            rows but it follows a Standard Schema Definition and can store all
                            sorts of data models with large distributed data in the form of
                            key-value pairs, graph databases, documents or wide-column stores.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                            JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-left">
                            <h1 className='text-2xl text-lime-500'>Header</h1>
                            <a>
                                The header is the part that identifies which algorithm is being used to generate the signature. It usually consists of two parts, the type of the token, which is JWT, and the hashing algorithm, like HMAC-SHA256.
                            </a>

                            <h1 className='text-2xl text-lime-500'>Payload</h1>
                            <a>
                                The payload is the part that contains a set of claims. Claims are used to transmit information between two parties. There are no mandatory claims, but JWT specification defines a set of standard claims, such as iat and sub, which are short for issues at and subject. Custom Claims are also included in the payload if required.
                            </a>

                            <h1 className='text-2xl text-lime-500'>Signature</h1>
                            <a>
                                The signature is the part that securely validates the token. The encoded header(Base64url) is concatenated with the encoded payload(Base64url) and then signed by hashed with the algorithm already mentioned in the header with the secret-key only known to the issuer. Then this whole string is again encoded with Base64url to obtain the final signature.

                                Since the secret key is only available to the issuer, only it can issue new tokens with a valid signature. Thus, the signature ensures that the token hasn’t been altered.
                            </a>

                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is the difference between javascript and NodeJS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <h1 className='text-2xl text-lime-500 text-left'>1. NodeJS : </h1>
                        <a className='text-left'>
                            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                        </a>

                        <h1 className='text-2xl text-lime-500 text-left'>2. JavaScript :</h1>
                        <a className='text-left'>
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                        </a>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does NodeJS handle multiple requests at the same time?
                    </Accordion.Title>
                    <Accordion.Content>

                        <a className='text-justify'>
                            NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.
                        </a>
                        <br></br>

                        <a className='text-justify'>
                            When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.
                        </a>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </>
    );
};

export default Blog;