import { useState, useEffect } from 'react';
import '../styles/App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', attendance: '', message: '' });
  const [sent, setSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Дата свадьбы (пример: 15 июня 2025)
  const weddingDate = new Date('2025-06-15T18:00:00');

  useEffect(() => {
    document.title = 'Wedding Invitation: Александр & Гульшат';

    const updateTimer = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить отправку данных на сервер
    setSent(true);
  };

  return (
    <div>
      {/* Главный блок с фото и таймером */}
      <section className="hero">
        <img
          src="/api/placeholder/1200/800" // замените на путь к вашему фото
          alt="Александр & Гульшат"
          className="hero-img"
        />
        <div className="hero-content">
          <h1 className="hero-title">Wedding</h1>
          <h2 className="hero-subtitle">Александр &amp; Гульшат</h2>
          <p className="date">15 июня 2025 · 18:00</p>
          <div className="timer">
            <div className="timer-unit">
              <span>{timeLeft.days}</span>
              <span className="timer-label">дней</span>
            </div>
            <div className="timer-unit">
              <span>{timeLeft.hours}</span>
              <span className="timer-label">часов</span>
            </div>
            <div className="timer-unit">
              <span>{timeLeft.minutes}</span>
              <span className="timer-label">минут</span>
            </div>
            <div className="timer-unit">
              <span>{timeLeft.seconds}</span>
              <span className="timer-label">секунд</span>
            </div>
          </div>
        </div>
      </section>

      {/* Основной контент приглашения */}
      <section className="invitation-section">
        <h2 className="section-title">Мы ждём вас!</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
          Приглашаем вас разделить с нами самый важный день в нашей жизни.
        </p>

        <div className="details-grid">
          <div className="detail-item">
            <p className="detail-label">Место</p>
            <p className="detail-value">
              Ресторан «Элегия»<br />
              ул. Центральная, 123, Москва
            </p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Время</p>
            <p className="detail-value">
              15 июня 2025<br />
              18:00
            </p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Дресс-код</p>
            <p className="detail-value">
              Полуформальный<br />
              (светлые тона приветствуются)
            </p>
          </div>
          <div className="detail-item">
            <p className="detail-label">Программа</p>
            <p className="detail-value">
              18:00 — Встреча гостей<br />
              19:00 — Церемония<br />
              20:00 — Ужин и танцы
            </p>
          </div>
        </div>

        {/* Форма RSVP */}
        <form onSubmit={handleSubmit} className="rsvp-form">
          {sent ? (
            <div
              style={{
                padding: '20px',
                backgroundColor: '#dff0d8',
                border: '1px solid #d6e9c6',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#3c763d',
              }}
            >
              Спасибо! Ваш ответ получен.
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="attendance">Придёте?</label>
                <select
                  id="attendance"
                  name="attendance"
                  value={form.attendance}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите вариант</option>
                  <option value="yes">Да, с радостью!</option>
                  <option value="no">Нет, к сожалению</option>
                  <option value="maybe">Возможно</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Сообщение (по желанию)</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit">Отправить ответ</button>
            </>
          )}
        </form>
      </section>

      {/* Футер */}
      <footer className="footer">
        <p>С любовью, Александр &amp; Гульшат</p>
        <p>© 2025</p>
      </footer>
    </div>
  );
}

export default App;
