// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Example Data
    const assessments = [
        { title: "Math Quiz 1", type: "quiz", date: "2024-08-30" },
        { title: "Science Assignment", type: "assignment", date: "2024-08-29" }
    ];

    const activities = [
        { activity: "Student A submitted Math Quiz 1", date: "2024-08-30" },
        { activity: "Student B submitted Science Assignment", date: "2024-08-29" }
    ];

    const analytics = {
        totalAssessments: 10,
        averageScore: 85,
        completionRate: 95
    };

    // Populate My Assessments
    const assessmentsList = document.getElementById('assessments-list');
    assessments.forEach(assessment => {
        const assessmentItem = document.createElement('div');
        assessmentItem.classList.add('assessment-item');
        assessmentItem.innerHTML = `<strong>${assessment.title}</strong> - ${assessment.type} - ${assessment.date}`;
        assessmentsList.appendChild(assessmentItem);
    });

    // Populate Recent Activities
    const activitiesList = document.getElementById('activities-list');
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');
        activityItem.innerHTML = `<p>${activity.activity}</p><small>${activity.date}</small>`;
        activitiesList.appendChild(activityItem);
    });

    // Populate Assessment Analytics Summary
    const analyticsData = document.getElementById('analytics-data');
    analyticsData.innerHTML = `
        <p><strong>Total Assessments:</strong> ${analytics.totalAssessments}</p>
        <p><strong>Average Score:</strong> ${analytics.averageScore}%</p>
        <p><strong>Completion Rate:</strong> ${analytics.completionRate}%</p>
    `;
});
