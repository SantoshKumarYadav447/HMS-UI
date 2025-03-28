import React from 'react';

const Page = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Contact Us</h1>
            <form style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    ></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Page;