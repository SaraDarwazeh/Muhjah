import React, { useState, useEffect } from 'react';
import './feedback.css';

const SocialMediaDashboard = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filterVisible, setFilterVisible] = useState(false);
    const [selectedType, setSelectedType] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');

    const samplePosts = [
        {
            id: 1,
            author: 'ماما نسرين',
            time: 'اليوم، 6:00 مساءً',
            content: 'من لما بدأ ابني يزحف، ما عاد ألحق عليه! 😅شو بتحطوا على الزوايا أو الدواليب للحماية؟',
            type: 'question',
            status: 'pending'
        },
        {
            id: 2,
            author: 'ماما نسرين',
            time: 'اليوم، 6:20 مساءً',
            content: 'حبيت أشارك فكرة ساعدتني بالنوم:أغنية معينة + ضوء خافت = نام بسرعة! جربوا واحكولي شو بيمشي مع أطفالكم 😴',
            type: 'advice',
            status: 'pending'
        },
        {
            id: 3,
            author: 'ماما هالة',
            time: 'اليوم، 7:00 مساءً',
            content: 'حاسة بالوحدة بصراحة، خصوصًا لما يكون البيبي نايم.كيف بتقضوا وقتكم؟ بتحبوا تشاركوا روتينكم؟',
            type: 'experience',
            status: 'pending'
        }
    ];

    useEffect(() => {
        setPosts(samplePosts);
        setFilteredPosts(samplePosts);
    }, []);

    useEffect(() => {
        let filtered = [...posts];
        if (selectedType !== 'all') {
            filtered = filtered.filter(post => post.type === selectedType);
        }
        if (selectedStatus !== 'all') {
            filtered = filtered.filter(post => post.status === selectedStatus);
        }
        setFilteredPosts(filtered);
    }, [selectedType, selectedStatus, posts]);

    const handleAccept = (id) => {
        setPosts(prev =>
            prev.map(post => post.id === id ? { ...post, status: 'accepted' } : post)
        );
    };

    const handleReject = (id) => {
        setPosts(prev =>
            prev.map(post => post.id === id ? { ...post, status: 'rejected' } : post)
        );
    };

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                {/* فلتر */}
                <div className="filter-wrapper">
                    <button className="filter-toggle" onClick={() => setFilterVisible(!filterVisible)}>فلتر</button>
                    {filterVisible && (
                        <div className="filter-panel">
                            <div>
                                <label>نوع المنشور</label>
                                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                                    <option value="all">الكل</option>
                                    <option value="question">سؤال</option>
                                    <option value="advice">نصيحة</option>
                                    <option value="experience">تجربة</option>
                                </select>
                            </div>
                            <div>
                                <label>الحالة</label>
                                <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                                    <option value="all">الكل</option>
                                    <option value="pending">في الانتظار</option>
                                    <option value="accepted">مقبول</option>
                                    <option value="rejected">مرفوض</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* المنشورات */}
                {filteredPosts.map(post => (
                    <div key={post.id} className="post-card">
                        <div className="actions">
                            <button className="accept" onClick={() => handleAccept(post.id)} disabled={post.status === 'accepted'}>قبول</button>
                            <button className="reject" onClick={() => handleReject(post.id)} disabled={post.status === 'rejected'}>رفض</button>
                        </div>
                        <div className="post-content">
                            <p className="time">{post.time}</p>
                            <h3 className="author">{post.author}</h3>
                            <p className="content">{post.content}</p>
                            {post.status !== 'pending' && (
                                <p className={`status ${post.status}`}>
                                    {post.status === 'accepted' ? 'تم القبول' : 'تم الرفض'}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaDashboard;