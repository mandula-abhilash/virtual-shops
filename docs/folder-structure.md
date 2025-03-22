## 📁 Folder Structure: Virtual Shops (Next.js + Express, JavaScript)

```
virtual-shops/
├── apps/
│   ├── web/                           # Next.js frontend (PWA-ready)
│   │   ├── pages/                     # Next.js pages (routes)
│   │   ├── components/                # Reusable React components
│   │   ├── layouts/                   # Page layouts
│   │   ├── hooks/                     # React hooks (e.g., useAuth, useBooking)
│   │   ├── lib/                       # Utility functions (formatting, API)
│   │   ├── public/                    # Static assets
│   │   └── styles/                    # Tailwind CSS and globals

│   ├── admin-dashboard/              # (Optional) Admin portal (could reuse web codebase)

├── server/                            # Express backend
│   ├── index.js                       # Main Express app entry
│   ├── routes/                        # All API routes (bookings, users, stream, etc.)
│   ├── controllers/                   # Logic for each route
│   ├── models/                        # PostgreSQL models (with knex migraitons)
│   ├── middleware/                    # Auth, validation, error handling
│   ├── services/                      # Business logic layer (e.g., slot availability, tagging)
│   ├── config/                        # App config, DB setup, secrets
│   ├── utils/                         # Helpers (e.g., generate tokens, stream URLs)
│   └── jobs/                          # Background jobs (reminders, cleanup, etc.)

├── shared/                            # Common code (shared between web & server if needed)
│   ├── constants/                     # Static enums, roles, etc.
│   ├── schemas/                       # Joi/Zod schemas or validators
│   └── types/                         # JSDoc or JS object shape references

├── scripts/                           # Seeders, one-off maintenance scripts
├── prisma/                            # Knex schema & migrations
├── .env                               # Environment variables
├── .gitignore
├── package.json
├── next.config.js
├── tailwind.config.js
├── jsconfig.json                      # Aliases for better dev experience
└── README.md
```

---

## ✅ Technology Stack Recap

| Layer         | Tool                                                                |
| ------------- | ------------------------------------------------------------------- |
| Frontend      | **Next.js**, **Tailwind CSS**, **shadcn/ui**, **React hooks**       |
| Backend       | **Express.js**, modular routing, controller-service-model           |
| Database      | **PostgreSQL**                                                      |
| Auth          | JWT-based (API routes protected on backend)                         |
| Notifications | Integrate **Nodemailer**                                            |
| Streaming     | Use **RTSP to HLS**, embed using `video.js` or WebRTC-based viewers |
| Deployment    | Docker, Nginx (optional), PM2 or Node for serving Express API       |

---

## Example Routes on Express

```bash
/server/routes/
  ├── auth.js
  ├── booking.js
  ├── stream.js
  ├── shop.js
  └── catalog.js
```

---

## Example API Integration from Next.js (client)

```js
// apps/web/lib/api.js
export const bookSlot = async (payload) => {
  const res = await fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};
```
