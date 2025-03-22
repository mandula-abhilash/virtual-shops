# Requirements Document: Visdak Virtual Shops – Virtual Shopping & Live Interaction Platform

## 1. Executive Summary

This document outlines the detailed requirements for **Visdak Virtual Shops**, a virtual shopping and live interaction platform tailored for small, local businesses such as dress shops and property brokers. The platform combines live 360° or PTZ camera views, slot-based appointment booking, live customer interaction, and pre-recorded content to create a seamless and modern shopping experience accessible from mobile phones. It is designed to bridge the gap between traditional shopping and online browsing with a personal touch.

---

## 2. System Overview

The system will be built using the **Bolt framework**, designed to be modular, mobile-first, and affordable. It consists of:

- A customer-facing app (web/mobile) for browsing, booking, and attending live sessions
- A shopkeeper portal for managing slots, customers, and showcasing products
- Video infrastructure supporting 360° and PTZ live streams
- Optional product tagging and pre-recorded content uploads
- Notifications, analytics, and feedback mechanisms

---

## 3. Functional Requirements

### 3.1 Customer Interface

**3.1.1 Virtual Shop View**

- Display a real-time 360° or PTZ camera feed
- Support touch and gyro-based navigation
- Optional auto-panning mode
- Allow customers to watch passively or book interaction

**3.1.2 Slot Booking**

- List of available time slots by date
- Book slot with name, mobile number (OTP optional), preferences
- Confirmation via WhatsApp/SMS
- Reminder notifications 15 min before the slot

**3.1.3 Live Session Participation**

- Join session via embedded video call (WebRTC or WhatsApp)
- Optional group participation (multiple family members)
- Real-time product assistance by shop staff
- Show interest/book product during or after session

**3.1.4 Product Discovery**

- View short preview clips/images of new arrivals
- Browse daily picks curated by shopkeepers
- View recent session history ("items you saw")

**3.1.5 Feedback & Follow-up**

- Post-session summary
- Rate session or product demo
- Reconnect via chat/call option

---

### 3.2 Shopkeeper Portal

**3.2.1 Shop Profile Setup**

- Upload store details, logo, photos
- Set store category (fashion/property/etc.)
- Add optional address and map link

**3.2.2 Slot Calendar Management**

- Define daily availability (working hours, breaks)
- Set slot duration and buffer time
- View bookings and reschedule if needed

**3.2.3 Live Session Management**

- Get notified before slot starts
- Join call and showcase products using phone or camera
- Mark items as "shown", "interested", or "sold"

**3.2.4 Product Highlight Tools**

- Upload short videos/images of new items
- Tag them by category/color/size/occasion
- Auto-generate pre-call preview sets

**3.2.5 Customer Interaction Tools**

- View customer info during session
- Leave notes or set follow-ups
- Send follow-up messages via WhatsApp

**3.2.6 Analytics Dashboard**

- See session count, booking rate, customer feedback
- Popular products based on interest clicks
- Customer retention insights

---

### 3.3 Video & Streaming Infrastructure

**3.3.1 Camera Options**

- Support 360° cameras (Insta360 X3, Ricoh Theta X)
- Support budget PTZ IP cameras with ONVIF/RTSP
- Option to stream via mobile camera (fallback/default)

**3.3.2 Live Stream Handling**

- RTSP to HLS conversion for live view
- WebRTC or Jitsi integration for real-time calls
- Embed live stream + control buttons if PTZ supported

**3.3.3 Session Recording (Optional)**

- Record customer sessions for rewatch
- Auto-tag products shown during session
- Show post-session "you viewed" list

---

### 3.4 Notification System

**3.4.1 Customer Notifications**

- Booking confirmations (SMS/WhatsApp)
- Session reminders
- "Thank you" + follow-up messages

**3.4.2 Shopkeeper Notifications**

- New booking alert
- Daily schedule summary
- Follow-up prompt for recent customers

---

## 4. Non-Functional Requirements

### 4.1 Security Requirements

- Role-based access for customers and shopkeepers
- All personal data encrypted at rest and in transit
- Rate limiting on public endpoints
- OTP-based optional login (via mobile number)
- Secure media streaming with token-based access

### 4.2 Performance

- Booking and stream loads under 2 seconds
- Video latency below 3s for WebRTC, <10s for HLS
- Support for 100 concurrent viewers per store

### 4.3 Scalability

- Bolt microservice-friendly deployment
- Stream caching for popular stores
- Auto-scaling of slot scheduler and media gateway services

---

## 5. Technical Requirements (Bolt-Based)

### 5.1 Backend Services

- User service: manage customers & shopkeeper accounts
- Booking service: slot availability, reservations
- Media service: stream ingestion, conversion, routing
- Catalog service: short videos/images + tagging
- Notification service: WhatsApp, SMS, email
- Analytics service: session metrics, feedback, product heatmap

### 5.2 Database

- PostgreSQL (for relational data)
- Redis (caching slot calendar, live stream links)
- S3-compatible object store (media)

### 5.3 Admin Panel (Optional Internal Use)

- View all shops, customers, sessions
- Moderate abuse reports
- Monitor system health, video stream load

---

## 6. Phased Implementation

### Phase 1: MVP

- Customer live view
- Slot booking & confirmation
- Shopkeeper join session
- Manual product showcasing (no tagging)

### Phase 2: Engagement Layer

- Pre-call product previews
- WhatsApp follow-ups
- Session summaries

### Phase 3: Advanced Experience

- Product tagging in live session
- Group video calls
- Interest-based analytics

### Phase 4: Automation

- Camera auto-panning
- Staff availability handling
- Session queue management

---

## 7. Success Metrics

| Metric                                | Goal by Mar 2026 |
| ------------------------------------- | ---------------- |
| Active paying shops                   | 200              |
| Monthly sessions booked               | 5,000+           |
| Avg. session rating                   | 4.5/5            |
| Product conversion (interest to sale) | 25%+             |
| Retention (repeat customers per shop) | 60%+             |

---

## 8. Appendices

### A. Supported Camera Models

- Insta360 X3, ONE X2
- Ricoh Theta X, V
- ESCAM QF, TP-Link C200 (PTZ)
- Any RTSP/ONVIF-compatible IP camera

### B. Sample APIs (to be expanded in build stage)

- `POST /book-slot`
- `GET /shop/:id/stream`
- `POST /feedback`
- `GET /products?shopId=...`
- `POST /mark-interest`

### C. Notes

- Native app is optional; PWA-first recommended
- Start with pilot in 1–2 cities
- Visdak branding and camera rental model to be explored in parallel
