import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { ALL_BUILTIN_RECIPES, getRecipeById } from './data/recipes/index.js';
import { CATEGORIES } from './data/categories.js';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="leather-inset" style={{ flex: 1, margin: '16px', overflowY: 'auto' }}>
      <h2 className="text-deboss" style={{ textAlign: 'center', fontFamily: 'var(--font-display)', marginBottom: '16px' }}>
        My Recipe Book
      </h2>
      <div style={{ display: 'grid', gap: '12px' }}>
        {ALL_BUILTIN_RECIPES.map(recipe => (
          <div key={recipe.id} className="leather-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div style={{ fontSize: '2rem' }}>{recipe.emoji}</div>
             <div style={{ flex: 1 }}>
               <h3 className="text-emboss" style={{ margin: 0, fontFamily: 'var(--font-display)' }}>{recipe.title}</h3>
               <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,240,217,0.7)' }}>{recipe.prepTime + recipe.cookTime} min • {recipe.difficulty}</p>
             </div>
             <button className="btn-brass" onClick={() => navigate(`/recipe/${recipe.id}`)}>Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecipeView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = getRecipeById(id);

  if (!recipe) return <div className="paper-page"><h2>Recipe not found</h2><button className="btn-brass" onClick={() => navigate(-1)}>Back</button></div>;

  return (
    <div className="paper-page">
      <button className="btn-brass" style={{ marginBottom: '16px' }} onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '-16px' }}>{recipe.emoji}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', margin: '0' }}>{recipe.title}</h1>
        <p className="handwritten" style={{ margin: '8px 0' }}>{recipe.region}</p>
        <p style={{ fontStyle: 'italic', color: 'var(--c-ink-light)' }}>{recipe.description}</p>
      </div>

      <div className="stitched-border" style={{ borderColor: 'var(--c-ink-light)', boxShadow: 'none', display: 'flex', justifyContent: 'space-around', marginBottom: '24px', backgroundColor: 'rgba(0,0,0,0.02)' }}>
        <div style={{ textAlign: 'center' }}><strong>{recipe.prepTime + recipe.cookTime}</strong><br/><small>MINUTES</small></div>
        <div style={{ textAlign: 'center' }}><strong>{recipe.servings}</strong><br/><small>SERVINGS</small></div>
        <div style={{ textAlign: 'center' }}><strong>{recipe.difficulty.toUpperCase()}</strong><br/><small>DIFFICULTY</small></div>
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid var(--c-ink-light)', paddingBottom: '4px', marginBottom: '12px' }}>Ingredients</h3>
      <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '24px' }}>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx} style={{ padding: '6px 0', borderBottom: '1px dashed rgba(0,0,0,0.1)' }}>
            <strong>{ing.qty ? ing.qty : ''} {ing.unit ? ing.unit : ''}</strong> {ing.item}
            {ing.note && <span style={{ fontStyle: 'italic', color: 'var(--c-ink-light)' }}> ({ing.note})</span>}
          </li>
        ))}
      </ul>

      <h3 style={{ fontFamily: 'var(--font-display)', borderBottom: '1px solid var(--c-ink-light)', paddingBottom: '4px', marginBottom: '12px' }}>Instructions</h3>
      <ol style={{ paddingLeft: '20px' }}>
        {recipe.steps.map((step, idx) => (
          <li key={idx} style={{ padding: '8px 0', paddingLeft: '8px', lineHeight: '1.6' }}>
            {step.text}
            {step.timer && (
              <span style={{ display: 'inline-block', marginLeft: '8px', padding: '2px 6px', backgroundColor: '#e8e2d2', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                ⏱️ {step.timer} min
              </span>
            )}
          </li>
        ))}
      </ol>
      
      {recipe.tips && recipe.tips.length > 0 && (
         <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#e8e2d2', borderRadius: '8px', transform: 'rotate(1deg)' }}>
           <h4 className="handwritten" style={{ margin: '0 0 8px 0' }}>Notes</h4>
           <ul style={{ listStyleType: 'circle', paddingLeft: '20px', fontSize: '0.9rem' }}>
             {recipe.tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
           </ul>
         </div>
      )}
    </div>
  );
};

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="leather-inset" style={{ flex: 1, margin: '16px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
      <h2 className="text-deboss" style={{ textAlign: 'center', fontFamily: 'var(--font-display)' }}>Categories</h2>
      {CATEGORIES.map(cat => (
        <div key={cat.id} className="leather-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '2rem' }}>{cat.emoji}</div>
          <div style={{ flex: 1 }}>
             <span className="text-emboss" style={{ fontWeight: 'bold' }}>{cat.name}</span>
             <p style={{ margin: 0, fontSize: '0.75rem', color: 'rgba(255,240,217,0.6)' }}>{cat.blurb}</p>
          </div>
          <button className="btn-brass" onClick={() => navigate(`/?category=${cat.id}`)}>View</button>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem('sas:theme') || 'leather');
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sas:theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'leather' ? 'barbie' : 'leather');
  };

  const tabs = [
    { path: '/', label: 'Recipes', icon: '📖' },
    { path: '/categories', label: 'Index', icon: '🗂️' }
  ];

  return (
    <div className={`theme-${theme}`} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {theme === 'barbie' ? (
        <header className="barbie-header-container">
          {/* The Circular Badge */}
          <div className="barbie-badge">
            <svg viewBox="0 0 100 100" className="barbie-silhouette">
              {/* Approximated silhouette shape */}
              <circle cx="50" cy="50" r="50" fill="#ffb3d9" />
              <circle cx="50" cy="50" r="45" fill="#ff1a8c" />
              <path d="M 50,20 C 30,20 25,40 30,60 C 35,75 50,85 50,85 C 50,85 65,75 70,60 C 75,40 70,20 50,20 Z" fill="#fff" />
              {/* Ponytail hint */}
              <path d="M 65,30 C 80,20 90,40 75,55" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>

          {/* The Giant Logo Text */}
          <div className="barbie-huge-logo">
            Barbie
          </div>

          {/* The Ribbon */}
          <div className="barbie-ribbon">
            <div className="ribbon-tail left"></div>
            <div className="ribbon-center">
              <span className="ribbon-heart">♥</span>
              <h2 className="ribbon-text">Saddle & Spoon</h2>
              <span className="ribbon-heart">♥</span>
            </div>
            <div className="ribbon-tail right"></div>
          </div>
        </header>
      ) : (
        <header className="app-header">
          {/* <button onClick={toggleTheme} className="theme-toggle-btn" title="Switch Theme">🎀 Barbie Mode</button> */}
          <h1 className="gold-foil" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', margin: 0, letterSpacing: '1px' }}>
            Saddle & Spoon
          </h1>
        </header>
      )}

      {/* When in Barbie mode, put the toggle somewhere else so it doesn't ruin the header */}
      {/* {theme === 'barbie' && (
         <button onClick={toggleTheme} className="theme-toggle-btn barbie-floating-toggle">
            🧵 Leather Mode
         </button>
      )} */}

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeView />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>

      <nav className="tab-bar">
        {tabs.map(tab => (
          <button
            key={tab.path}
            className={`tab-btn ${location.pathname === tab.path ? 'active' : ''}`}
            onClick={() => navigate(tab.path)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
