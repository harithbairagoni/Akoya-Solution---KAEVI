/**
 * KAEVI GLOBAL WORKFORCE PARTNERS
 * Corporate Website Logic, Responsive Navigation & Executive Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initHybridMotionSystem();
  initLifecycleTabs();
  initScorecardToggle();
  initPilotStepper();
  initBriefingModal();
  initLegalModal();
  initMobileNav();
});

/* --------------------------------------------------------------------------
   1. GCC Lifecycle Moments Navigator (Section 8)
   -------------------------------------------------------------------------- */
const lifecycleData = {
  establish: {
    tag: "MOMENT 01",
    phase: "Establish",
    title: "Launch a new function",
    scope: "Early leadership, foundational squads and critical specialist roles.",
    narrative: "When establishing a new Center of Excellence or engineering division in India, early leadership choices determine culture and technical velocity for years. KAEVI calibrates the founding Director, Principal Architects, and foundational engineering squads.",
    roles: [
      "Head of Engineering / GCC Center Director",
      "Principal Systems Architects & Core Leads",
      "Founding Engineering Managers & Staff Specialists",
      "People Operations & Strategic Talent Lead"
    ],
    mandateShape: "Calibrated 1-on-1 executive search with weekly stakeholder alignment."
  },
  expand: {
    tag: "MOMENT 02",
    phase: "Expand",
    title: "Scale a capability",
    scope: "High-volume ramp-ups, repeatable niche hiring, capacity flex.",
    narrative: "When business mandates demand rapid squad scaling across full-stack, cloud infrastructure, or data engineering, traditional agencies flood inboxes with unqualified CVs. KAEVI deploys dedicated delivery pods with parallel sourcing lanes to ensure predictable headcount velocity without lowering technical bars.",
    roles: [
      "Distributed Backend & Full-Stack Squads (Go, Java, React)",
      "Data Platform & High-Throughput Pipeline Engineers",
      "Cloud Infrastructure & Site Reliability Engineers",
      "SDET & Automation Architecture Specialists"
    ],
    mandateShape: "Embedded sprint pods with SLA-governed pipeline velocity."
  },
  transform: {
    tag: "MOMENT 03",
    phase: "Transform",
    title: "Change the skill mix",
    scope: "AI, advanced engineering, platform, data and cybersecurity mandates.",
    narrative: "As enterprise mandates move upstream, GCCs lead generative AI deployments, cloud modernization, and zero-trust security postures. Transitioning existing talent or acquiring scarce practitioners requires precise ecosystem mapping and passive talent activation.",
    roles: [
      "AI/ML Research & Production LLM Engineers",
      "Zero-Trust Cloud Architects & AppSec Leads",
      "Enterprise Modernization & SAP S/4HANA Architects",
      "Global Integration & Middleware Specialists"
    ],
    mandateShape: "Specialist headhunting with comprehensive counteroffer hedging."
  },
  sustain: {
    tag: "MOMENT 04",
    phase: "Sustain",
    title: "Keep the engine strong",
    scope: "Business-as-usual demand, backfills, evergreen pipelines, embedded TA.",
    narrative: "Mature centers require continuous replacement and proactive pipelining to absorb attrition without missing business delivery milestones. We maintain verified, pre-screened candidate benches for business-critical seats.",
    roles: [
      "Domain Specialists & Core Technical Project Leads",
      "Enterprise FinOps & Business Systems Analysts",
      "Evergreen Replacement for Senior Engineering Bands",
      "Corporate Shared Services & Operations Leadership"
    ],
    mandateShape: "Retained evergreen pipelines with continuous talent calibration."
  }
};

function initLifecycleTabs() {
  const buttons = Array.from(document.querySelectorAll('.lifecycle-tab-btn'));
  const panel = document.getElementById('lifecycle-content-panel');
  if (!buttons.length || !panel) return;

  function activateTab(btn, focus = false) {
    const stage = btn.getAttribute('data-moment');
    const data = lifecycleData[stage];
    if (!data) return;

    buttons.forEach(b => {
      b.classList.remove('active', 'border-slate-900', 'text-slate-900', 'bg-white');
      b.classList.add('text-slate-500', 'border-transparent');
      b.setAttribute('aria-selected', 'false');
    });

    btn.classList.add('active', 'border-slate-900', 'text-slate-900', 'bg-white');
    btn.classList.remove('text-slate-500', 'border-transparent');
    btn.setAttribute('aria-selected', 'true');
    if (focus) btn.focus();

    const newContent = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-7 space-y-4">
          <span class="eyebrow-tag">${data.tag} // ${data.phase.toUpperCase()}</span>
          <h3 class="text-2xl sm:text-3xl font-serif text-slate-900 leading-tight">${data.title}</h3>
          <p class="text-sm font-medium text-slate-600">${data.scope}</p>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">${data.narrative}</p>
          
          <div class="pt-4 border-t border-slate-200">
            <span class="text-xs font-semibold text-slate-900 uppercase tracking-wider block mb-1">Delivery Cadence</span>
            <p class="text-xs text-sky-800 font-medium">${data.mandateShape}</p>
          </div>
        </div>

        <div class="lg:col-span-5 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Typical Mandate Scope</h4>
          <ul class="space-y-2.5 text-xs text-slate-700">
            ${data.roles.map(r => `
              <li class="flex items-start gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-700 mt-1.5 shrink-0"></span>
                <span>${r}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    if (typeof gsap !== 'undefined') {
      gsap.to(panel, {
        opacity: 0,
        y: -4,
        duration: 0.15,
        ease: 'power2.in',
        onComplete: () => {
          panel.innerHTML = newContent;
          gsap.fromTo(panel,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
          );
        }
      });
    } else {
      panel.innerHTML = newContent;
    }
  }

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => activateTab(btn));

    btn.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight') {
        targetIndex = (index + 1) % buttons.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (index - 1 + buttons.length) % buttons.length;
      } else if (e.key === 'Home') {
        targetIndex = 0;
      } else if (e.key === 'End') {
        targetIndex = buttons.length - 1;
      }

      if (targetIndex !== null) {
        e.preventDefault();
        activateTab(buttons[targetIndex], true);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. Scorecard Toggle (Weekly Delivery vs. Monthly Business)
   -------------------------------------------------------------------------- */
function initScorecardToggle() {
  const toggleButtons = document.querySelectorAll('.scorecard-tab-btn');
  const weeklyView = document.getElementById('scorecard-weekly-view');
  const monthlyView = document.getElementById('scorecard-monthly-view');
  if (!toggleButtons.length || !weeklyView || !monthlyView) return;

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view');
      const isAlreadyActive = (mode === 'weekly' && !weeklyView.classList.contains('hidden')) ||
                              (mode === 'monthly' && !monthlyView.classList.contains('hidden'));
      if (isAlreadyActive) return;

      toggleButtons.forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white');
        b.classList.add('bg-white', 'text-slate-700');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('bg-slate-900', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');
      btn.setAttribute('aria-selected', 'true');

      const outView = mode === 'weekly' ? monthlyView : weeklyView;
      const inView = mode === 'weekly' ? weeklyView : monthlyView;

      if (typeof gsap !== 'undefined') {
        gsap.to(outView, {
          opacity: 0,
          y: -4,
          duration: 0.15,
          ease: 'power2.in',
          onComplete: () => {
            outView.classList.add('hidden');
            inView.classList.remove('hidden');
            gsap.fromTo(inView,
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
            );
          }
        });
      } else {
        outView.classList.add('hidden');
        inView.classList.remove('hidden');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. 90-Day Pilot Stepper (Section 11)
   -------------------------------------------------------------------------- */
const pilotDetails = [
  {
    phase: "Align",
    timeframe: "Days 1–10",
    objective: "Select priority roles; calibrate skills, compensation, outcomes and trade-offs.",
    deliverables: [
      "Role Outcome Charter defining specific architectural problems the hire must solve",
      "Real-time compensation banding and peer market benchmark audit",
      "Calibration profile sign-off with hiring managers and HR stakeholders",
      "Agreement on weekly review cadence and SLA accountability"
    ]
  },
  {
    phase: "Activate",
    timeframe: "Days 11–30",
    objective: "Map the relevant talent pools; begin targeted outreach and shortlist calibration.",
    deliverables: [
      "Ecosystem talent mapping across tier-1 GCCs and relevant product firms",
      "Direct outreach focused on passive, proven practitioners",
      "Initial calibrated shortlist presentation (3–4 thoroughly vetted profiles)",
      "First-stage calibration review to refine screening parameters"
    ]
  },
  {
    phase: "Convert",
    timeframe: "Days 31–60",
    objective: "Run interviews, feedback, offer orchestration and risk management.",
    deliverables: [
      "Rapid interview orchestration with structured debriefs within 24 hours",
      "Candidate intent, notice period, and counteroffer vulnerability diagnostics",
      "Offer benchmarking, structuring, and acceptance orchestration",
      "Resignation confirmation and proactive pre-joining touchpoints"
    ]
  },
  {
    phase: "Optimise",
    timeframe: "Days 61–90",
    objective: "Review conversions, refine sourcing and decide where to scale.",
    deliverables: [
      "Pilot retrospective and conversion funnel analysis against agreed SLAs",
      "Evaluation of interview-to-offer and offer-to-join ratios",
      "Codification of GCC-specific sourcing playbooks for recurring roles",
      "Strategic decision on scaling to an embedded pod or sustained partnership"
    ]
  }
];

function initPilotStepper() {
  const stepButtons = document.querySelectorAll('.pilot-step-btn');
  const displayContainer = document.getElementById('pilot-detail-container');
  if (!stepButtons.length || !displayContainer) return;

  stepButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      stepButtons.forEach((b, i) => {
        if (i === index) {
          b.classList.add('border-slate-900', 'bg-white', 'shadow-sm', 'active');
          b.classList.remove('border-slate-200', 'bg-[#FBFBFA]');
        } else {
          b.classList.remove('border-slate-900', 'bg-white', 'shadow-sm', 'active');
          b.classList.add('border-slate-200', 'bg-[#FBFBFA]');
        }
      });

      const data = pilotDetails[index];
      const newHtml = `
        <div class="space-y-4">
          <div class="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <span class="eyebrow-tag">PHASE 0${index + 1} // ${data.phase.toUpperCase()}</span>
              <h4 class="text-xl font-serif text-slate-900 mt-1">${data.timeframe}: ${data.phase}</h4>
            </div>
            <span class="text-xs font-semibold text-slate-500 uppercase">Pilot Milestone</span>
          </div>

          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${data.objective}</p>

          <div class="pt-2">
            <span class="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2.5">Agreed Deliverables & Verification</span>
            <ul class="space-y-2">
              ${data.deliverables.map(item => `
                <li class="flex items-start gap-2.5 text-xs text-slate-700">
                  <svg class="w-4 h-4 text-sky-700 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;

      if (typeof gsap !== 'undefined') {
        gsap.to(displayContainer, {
          opacity: 0,
          y: -4,
          duration: 0.15,
          ease: 'power2.in',
          onComplete: () => {
            displayContainer.innerHTML = newHtml;
            gsap.fromTo(displayContainer,
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }
            );
          }
        });
      } else {
        displayContainer.innerHTML = newHtml;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Executive Briefing Modal with Real CRM Dispatch & Fallback
   -------------------------------------------------------------------------- */
function initBriefingModal() {
  const modal = document.getElementById('briefing-modal');
  const openButtons = document.querySelectorAll('.open-briefing-modal');
  const closeButtons = document.querySelectorAll('.close-briefing-modal');
  const form = document.getElementById('executive-briefing-form');
  const formPanel = document.getElementById('briefing-form-panel');
  const successPanel = document.getElementById('briefing-success-panel');
  const errorPanel = document.getElementById('briefing-error-panel');
  const retryBtn = document.getElementById('briefing-retry-btn');
  const mailtoFallback = document.getElementById('briefing-mailto-fallback');
  const submitBtn = document.getElementById('briefing-submit-btn');

  if (!modal) return;

  let isSubmitting = false;

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    resetToFormView();
    const nameInput = document.getElementById('briefing-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 80);
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function resetToFormView() {
    if (formPanel) formPanel.classList.remove('hidden');
    if (successPanel) successPanel.classList.add('hidden');
    if (errorPanel) errorPanel.classList.add('hidden');
    clearValidationErrors();
  }

  function clearValidationErrors() {
    ['name', 'email', 'enterprise', 'consent'].forEach(id => {
      const errEl = document.getElementById(`error-${id}`);
      if (errEl) errEl.classList.add('hidden');
    });
  }

  openButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      resetToFormView();
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (isSubmitting) return; // Prevent duplicate submissions

      clearValidationErrors();

      // Field Values
      const name = (document.getElementById('briefing-name')?.value || '').trim();
      const email = (document.getElementById('briefing-email')?.value || '').trim();
      const enterprise = (document.getElementById('briefing-enterprise')?.value || '').trim();
      const stage = document.getElementById('briefing-stage')?.value || '';
      const practice = document.getElementById('briefing-practice')?.value || '';
      const notes = (document.getElementById('briefing-notes')?.value || '').trim();
      const consent = document.getElementById('briefing-consent')?.checked;

      // Validation logic
      let hasError = false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (!name || name.length < 2) {
        document.getElementById('error-name')?.classList.remove('hidden');
        if (!hasError) document.getElementById('briefing-name')?.focus();
        hasError = true;
      }

      if (!email || !emailRegex.test(email)) {
        document.getElementById('error-email')?.classList.remove('hidden');
        if (!hasError) document.getElementById('briefing-email')?.focus();
        hasError = true;
      }

      if (!enterprise || enterprise.length < 2) {
        document.getElementById('error-enterprise')?.classList.remove('hidden');
        if (!hasError) document.getElementById('briefing-enterprise')?.focus();
        hasError = true;
      }

      if (!consent) {
        document.getElementById('error-consent')?.classList.remove('hidden');
        hasError = true;
      }

      if (hasError) return;

      // Lock submission & enter loading state
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          <span>Transmitting Mandate...</span>
        `;
      }

      // Pre-compose fallback mailto link so user work is 100% preserved
      const mailtoSubject = encodeURIComponent(`Executive Mandate Briefing: ${enterprise} (${practice})`);
      const mailtoBody = encodeURIComponent(
        `KAEVI Global Workforce Partners — Executive Briefing Intake\n\n` +
        `Contact Name: ${name}\n` +
        `Corporate Email: ${email}\n` +
        `Enterprise / GCC: ${enterprise}\n` +
        `Lifecycle Moment: ${stage}\n` +
        `Talent Practice: ${practice}\n` +
        `Mandate Notes: ${notes || 'None specified'}\n\n` +
        `Dispatched via kaevi.net enterprise portal.`
      );
      if (mailtoFallback) {
        mailtoFallback.href = `mailto:briefings@kaevi.net?subject=${mailtoSubject}&body=${mailtoBody}`;
      }

      const payload = {
        fullName: name,
        corporateEmail: email,
        enterpriseName: enterprise,
        lifecycleStage: stage,
        practiceArea: practice,
        mandateNotes: notes,
        source: 'kaevi-corporate-web-v1',
        submittedAt: new Date().toISOString()
      };

      try {
        // In production, configure window.KAEVI_BRIEFING_ENDPOINT to your CRM/Webhook
        const endpoint = window.KAEVI_BRIEFING_ENDPOINT || '/api/briefing';
        
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          // Genuinely verified submission
          const result = await response.json().catch(() => ({}));
          const refId = result.referenceId || `KV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
          const refEl = document.getElementById('success-ref-id');
          if (refEl) refEl.textContent = refId;

          formPanel?.classList.add('hidden');
          errorPanel?.classList.add('hidden');
          successPanel?.classList.remove('hidden');
          form.reset();
        } else {
          // Server returned error (e.g. 404, 500)
          console.warn('Briefing API returned status:', response.status);
          showErrorState();
        }
      } catch (err) {
        // Network error / offline / local static preview
        console.warn('Briefing submission offline or endpoint unreachable:', err);
        showErrorState();
      } finally {
        isSubmitting = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Transmit Mandate Inquiry</span>
            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          `;
        }
      }

      function showErrorState() {
        formPanel?.classList.add('hidden');
        successPanel?.classList.add('hidden');
        errorPanel?.classList.remove('hidden');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   5. Legal & Governance Modal
   -------------------------------------------------------------------------- */
function initLegalModal() {
  const modal = document.getElementById('legal-modal');
  const openButtons = document.querySelectorAll('.open-legal-modal');
  const closeButtons = document.querySelectorAll('.close-legal-modal');
  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* --------------------------------------------------------------------------
   6. Mobile Navigation Drawer & Backdrop
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const hamburger = document.getElementById('corp-mobile-toggle');
  const drawer = document.getElementById('corp-mobile-drawer');
  const backdrop = document.getElementById('corp-mobile-backdrop');
  const closeBtn = document.getElementById('corp-mobile-close');
  const links = document.querySelectorAll('.corp-mobile-link');

  if (!hamburger || !drawer) return;

  function openDrawer() {
    drawer.classList.remove('invisible', 'pointer-events-none', 'translate-x-full');
    drawer.classList.add('translate-x-0');
    if (backdrop) {
      backdrop.classList.remove('opacity-0', 'pointer-events-none');
      backdrop.classList.add('opacity-100', 'pointer-events-auto');
    }
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus first focusable item inside drawer
    const firstFocusable = drawer.querySelector('button, [href]');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeDrawer() {
    drawer.classList.add('translate-x-full');
    drawer.classList.remove('translate-x-0');
    if (backdrop) {
      backdrop.classList.add('opacity-0', 'pointer-events-none');
      backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    }
    hamburger.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      drawer.classList.add('invisible', 'pointer-events-none');
    }, 300);
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  links.forEach(l => l.addEventListener('click', closeDrawer));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('translate-x-full')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   7. Premium Hybrid Motion System (GSAP + ScrollTrigger + Fallback)
   -------------------------------------------------------------------------- */
function initHybridMotionSystem() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Sticky Header Elevation
  const header = document.getElementById('site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Reduced Motion handling: reveal everything immediately and exit
  if (prefersReduced) {
    const curtain = document.getElementById('hero-curtain-mask');
    if (curtain) curtain.classList.add('revealed');
    document.querySelectorAll('.stat-number-editorial').forEach(el => {
      const target = el.getAttribute('data-stat-target');
      const suffix = el.getAttribute('data-stat-suffix') || '';
      if (target === '2117') el.textContent = '2,117' + suffix;
      else if (target === '2.36') el.textContent = '2.36' + suffix;
      else if (target === '87') el.textContent = '87' + suffix;
    });
    document.querySelectorAll('.hairline-expand').forEach(el => {
      el.style.transform = 'scaleX(1)';
    });
    return;
  }

  // 3. Operating Model Interactive Timeline Logic
  const timelineProgressBar = document.getElementById('timeline-progress-bar');
  const stageCols = Array.from(document.querySelectorAll('.timeline-stage-col'));
  const pinNodes = Array.from(document.querySelectorAll('.timeline-node-pin'));
  const pinPercentages = [8.33, 25, 41.66, 58.33, 75, 91.66];

  function setActiveStage(index, animateBar = true) {
    if (index < 0 || index >= stageCols.length) return;
    const progressWidth = pinPercentages[index];

    if (timelineProgressBar) {
      if (animateBar && typeof gsap !== 'undefined') {
        gsap.to(timelineProgressBar, {
          width: `${progressWidth}%`,
          duration: 0.6,
          ease: 'power2.out'
        });
      } else if (timelineProgressBar) {
        timelineProgressBar.style.width = `${progressWidth}%`;
      }
    }

    pinNodes.forEach((pin, i) => {
      if (i <= index) {
        pin.classList.add('active');
      } else {
        pin.classList.remove('active');
      }
    });

    stageCols.forEach((col, i) => {
      if (i === index) {
        col.classList.add('active');
        col.classList.remove('border-slate-200');
        col.classList.add('border-slate-900');
      } else {
        col.classList.remove('active');
        col.classList.remove('border-slate-900');
        col.classList.add('border-slate-200');
      }
    });
  }

  stageCols.forEach((col, idx) => {
    col.addEventListener('click', () => setActiveStage(idx, true));
  });

  // 4. GSAP & ScrollTrigger Initialization
  const hasGsap = typeof gsap !== 'undefined';
  const hasScrollTrigger = typeof ScrollTrigger !== 'undefined';

  if (hasGsap && hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Entrance Timeline
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTl
      .fromTo('.hero-line-1', { y: '105%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.95, delay: 0.1 })
      .fromTo('.hero-line-2', { y: '105%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.95 }, '-=0.75')
      .fromTo('.hero-paragraph', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
      .fromTo('.hero-actions', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, '-=0.4')
      .fromTo('.hero-taxonomy', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .add(() => {
        const curtain = document.getElementById('hero-curtain-mask');
        if (curtain) curtain.classList.add('revealed');
      }, '-=0.85');

    // Apple-Style Spatial Hero Dimensional Depth Scroll (Desktop)
    if (window.innerWidth >= 1024) {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        gsap.timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        })
        .to('.hero-bg-img', { scale: 1.15, y: -40, ease: 'none' }, 0)
        .to('.hero-plane-1-type', { y: -50, scale: 0.88, opacity: 0.35, ease: 'power1.out' }, 0)
        .to('.hero-glass-plinth', { y: -25, scale: 1.03, boxShadow: '0 32px 70px -10px rgba(11,25,44,0.22)', ease: 'none' }, 0)
        .to('.hero-foreground-content', { y: -80, opacity: 0.9, ease: 'none' }, 0);
      }
    }

    // Signature Move: 3D Exploded Capability Engine (Apple Hardware Teardown)
    const engineSection = document.getElementById('capability-engine');
    if (engineSection) {
      const slices = [
        document.querySelector('.engine-layer-slice.slice-1'),
        document.querySelector('.engine-layer-slice.slice-2'),
        document.querySelector('.engine-layer-slice.slice-3'),
        document.querySelector('.engine-layer-slice.slice-4')
      ];
      const calloutCards = Array.from(document.querySelectorAll('.engine-callout-card'));

      function highlightEngineLayer(activeNum) {
        slices.forEach(s => {
          if (!s) return;
          const num = parseInt(s.getAttribute('data-slice'), 10);
          if (num === activeNum) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });

        calloutCards.forEach(c => {
          const num = parseInt(c.getAttribute('data-target-slice'), 10);
          if (num === activeNum) {
            c.classList.add('active');
          } else {
            c.classList.remove('active');
          }
        });
      }

      // Interactive Click on Callout Cards or Slices
      calloutCards.forEach(card => {
        card.addEventListener('click', () => {
          const targetSlice = parseInt(card.getAttribute('data-target-slice'), 10);
          highlightEngineLayer(targetSlice);
        });
      });

      slices.forEach(slice => {
        if (!slice) return;
        slice.addEventListener('click', () => {
          const num = parseInt(slice.getAttribute('data-slice'), 10);
          highlightEngineLayer(num);
        });
      });

      // Desktop Pinned 3D Exploded Scrubber
      if (window.innerWidth >= 1024) {
        const engineTl = gsap.timeline({
          scrollTrigger: {
            trigger: engineSection,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            onUpdate: (self) => {
              const p = self.progress;
              if (p > 0.75) highlightEngineLayer(4);
              else if (p > 0.5) highlightEngineLayer(3);
              else if (p > 0.25) highlightEngineLayer(2);
              else highlightEngineLayer(1);
            }
          }
        });

        engineTl
          .to('.engine-layer-slice.slice-4', { y: -135, z: 90, rotateX: 28, ease: 'power1.out' }, 0)
          .to('.engine-layer-slice.slice-3', { y: -45, z: 35, ease: 'power1.out' }, 0)
          .to('.engine-layer-slice.slice-2', { y: 45, z: -25, ease: 'power1.out' }, 0)
          .to('.engine-layer-slice.slice-1', { y: 135, z: -85, rotateX: 20, ease: 'power1.out' }, 0)
          .to('#engine-assembly', { rotateY: -14, ease: 'none' }, 0);
      }
    }

    // GCC Stats Smooth Count-Up (Accurate, exact static values, once: true)
    const statsContainer = document.getElementById('gcc-stats-container');
    if (statsContainer) {
      ScrollTrigger.create({
        trigger: statsContainer,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.hairline-expand', 
            { scaleX: 0 }, 
            { scaleX: 1, duration: 0.9, stagger: 0.15, ease: 'power2.out' }
          );

          const statEls = document.querySelectorAll('.stat-number-editorial');
          statEls.forEach(el => {
            const targetVal = parseFloat(el.getAttribute('data-stat-target'));
            const decimals = parseInt(el.getAttribute('data-stat-decimals') || '0', 10);
            const suffix = el.getAttribute('data-stat-suffix') || '';
            const obj = { val: 0 };

            gsap.to(obj, {
              val: targetVal,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                if (decimals > 0) {
                  el.textContent = obj.val.toFixed(decimals) + suffix;
                } else if (targetVal >= 1000) {
                  el.textContent = Math.floor(obj.val).toLocaleString('en-US') + suffix;
                } else {
                  el.textContent = Math.round(obj.val).toString() + suffix;
                }
              },
              onComplete: () => {
                if (targetVal === 2117) el.textContent = '2,117' + suffix;
                else if (targetVal === 2.36) el.textContent = '2.36' + suffix;
                else if (targetVal === 87) el.textContent = '87' + suffix;
              }
            });
          });
        }
      });
    }

    // About KAEVI Section Reveals
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      ScrollTrigger.create({
        trigger: aboutSection,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo(aboutSection.querySelectorAll('h2, p'),
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out' }
          );
          gsap.fromTo('.about-pillar',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out', delay: 0.15 }
          );
        }
      });
    }

    // Services Stagger
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      ScrollTrigger.create({
        trigger: servicesSection,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.service-row',
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
          );
        }
      });
    }

    // Practice Cards Entrance
    const practicesSection = document.getElementById('practices');
    if (practicesSection) {
      ScrollTrigger.create({
        trigger: practicesSection,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.practice-network-bar',
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: 'power2.out' }
          );
          gsap.fromTo('.practice-card',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power2.out' }
          );
        }
      });
    }

    // Lifecycle Section Entrance
    const lifecycleSection = document.getElementById('lifecycle');
    if (lifecycleSection) {
      ScrollTrigger.create({
        trigger: lifecycleSection,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo('#lifecycle .lifecycle-tab-btn',
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out' }
          );
          gsap.fromTo('#lifecycle-content-panel',
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.15 }
          );
        }
      });
    }

    // Operating Model Scroll Trigger Sequence
    const operatingSection = document.getElementById('operating-model');
    if (operatingSection) {
      ScrollTrigger.create({
        trigger: operatingSection,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          // Progressively draw the line from 0 to 8.33% (Stage 0)
          if (timelineProgressBar) {
            gsap.fromTo(timelineProgressBar,
              { width: '0%' },
              { width: '8.33%', duration: 0.8, ease: 'power2.out' }
            );
          }
          setActiveStage(0, false);
          gsap.fromTo('.timeline-stage-col', 
            { y: 16, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
          );
        }
      });
    }

    // 90-Day Pilot Section Entrance
    const pilotSection = document.getElementById('pilot');
    if (pilotSection) {
      ScrollTrigger.create({
        trigger: pilotSection,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.pilot-step-btn',
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }
          );
          gsap.fromTo('#pilot-detail-container',
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 }
          );
        }
      });
    }

    // Final CTA Section Entrance
    const finalCtaSection = document.getElementById('final-cta');
    if (finalCtaSection) {
      ScrollTrigger.create({
        trigger: finalCtaSection,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo(finalCtaSection.querySelectorAll('.site-container > div > *'),
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power2.out' }
          );
        }
      });
    }

  } else {
    // Graceful Fallback
    const curtain = document.getElementById('hero-curtain-mask');
    if (curtain) curtain.classList.add('revealed');
    
    document.querySelectorAll('.hairline-expand').forEach(el => {
      el.style.transform = 'scaleX(1)';
    });

    const statsContainer = document.getElementById('gcc-stats-container');
    if (statsContainer && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.stat-number-editorial').forEach(el => {
              const target = el.getAttribute('data-stat-target');
              const suffix = el.getAttribute('data-stat-suffix') || '';
              if (target === '2117') el.textContent = '2,117' + suffix;
              else if (target === '2.36') el.textContent = '2.36' + suffix;
              else if (target === '87') el.textContent = '87' + suffix;
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      obs.observe(statsContainer);
    }
  }
}
