# Portfolio Content Examples

This guide provides real-world examples of how to describe your game projects professionally.

---

## 📝 Project Title Formulas

### Good Titles
- ✅ "Dynamic Weather System"
- ✅ "Procedural Dungeon Generator"
- ✅ "Behavior Tree AI Framework"
- ✅ "Networked Multiplayer Combat"

### Avoid
- ❌ "My Game Project"
- ❌ "Cool AI Thing"
- ❌ "Game System"

**Formula:** `[Adjective] + [What It Does] + [Type]`

---

## 📋 Description Examples

### Formula: Problem → Solution → Impact

**Example 1: AI System**
```
"Implemented behavior tree-based AI with tactical decision-making for enemy combatants. 
Supports 20+ simultaneous agents with dynamic difficulty scaling based on player skill."
```

**Example 2: Inventory System**
```
"Modular inventory framework with drag-and-drop UI, item stacking, and equipment slots. 
Data-driven design allows designers to add items without code changes."
```

**Example 3: Save System**
```
"Robust save/load system with versioning support and automatic migration. 
Handles complex game states including quest progress, inventory, and world changes."
```

---

## 🎯 Problem Statement Examples

The "problem" field should explain **why this was needed**.

### Good Examples

**Inventory System:**
> "Players needed intuitive item management for 100+ collectibles without cluttering the UI"

**AI System:**
> "Creating challenging enemies that adapt to player strategy without feeling unfair"

**Dialogue System:**
> "Building branching conversations that track player choices across multiple playthroughs"

**Physics Simulation:**
> "Simulating realistic ragdoll physics while maintaining 60 FPS on target hardware"

### Avoid Vague Statements
- ❌ "The game needed better AI"
- ❌ "Players wanted more features"
- ❌ "We had to improve performance"

---

## 🔧 Tech Stack Examples

### Be Specific

**Good:**
```typescript
techStack: ['Unity 2022.3', 'C#', 'DOTween', 'Cinemachine', 'Input System']
```

**Even Better (with context):**
```typescript
techStack: [
  'Unity 2022.3 LTS',
  'C# with ECS',
  'A* Pathfinding',
  'Behavior Trees',
  'Object Pooling'
]
```

### Categories to Include
- **Engine/Framework:** Unity, Unreal, Godot, Custom C++
- **Languages:** C#, C++, Python, Lua
- **Libraries/Tools:** NavMesh, FMOD, DOTween
- **Patterns:** ECS, MVC, State Machine, Observer
- **Techniques:** Object Pooling, LOD, Octree

---

## 📚 Case Study Examples

### Template Structure

```typescript
caseStudy: {
  goals: [
    'Specific, measurable goal',
    'Technical requirement',
    'Performance target'
  ],
  challenges: [
    'Technical problem you faced',
    'Limitation or constraint',
    'Edge case or complexity'
  ],
  solutions: [
    'How you solved it (be technical)',
    'Architecture decision',
    'Optimization technique'
  ]
}
```

### Real Example: AI Combat System

```typescript
caseStudy: {
  goals: [
    'Create responsive enemy AI that feels challenging but fair',
    'Support 20+ simultaneous AI agents at 60 FPS',
    'Enable designers to tweak behavior without code'
  ],
  challenges: [
    'Pathfinding performance degradation with multiple agents',
    'AI making same decisions repeatedly (predictable)',
    'Balancing difficulty for different player skill levels'
  ],
  solutions: [
    'Implemented hierarchical behavior trees with modular decision nodes',
    'Used NavMesh baking with runtime updates for dynamic obstacles',
    'Added weighted randomization to tactical decisions',
    'Created ScriptableObject-based behavior profiles for designers'
  ]
}
```

### Real Example: Procedural Level Generator

```typescript
caseStudy: {
  goals: [
    'Generate unique, playable levels in under 100ms',
    'Ensure all areas are accessible (no dead ends)',
    'Provide visual variety while maintaining theme'
  ],
  challenges: [
    'Preventing impossible layouts or softlocks',
    'Balancing room density vs navigation clarity',
    'Maintaining consistent difficulty curve'
  ],
  solutions: [
    'Used graph-based room placement with Delaunay triangulation',
    'Implemented A* pathfinding verification before finalizing',
    'Created tile-based rule system with Wang tiles for seamless connections',
    'Added seed-based generation for reproducible levels'
  ]
}
```

---

## 🎮 Writing for Different Project Types

### Gameplay Mechanics

**Focus on:** Player experience, feel, responsiveness

```
Title: "Third-Person Combat System"
Description: "Responsive melee combat with combo chains, parrying, and enemy lock-on. 
             Animation canceling and frame-perfect timing create skill-based gameplay."
Problem: "Creating combat that feels impactful and fair with clear visual feedback"
Tech: ['Unity', 'C#', 'Animation Rigging', 'Root Motion', 'State Machine']
```

### Systems Programming

**Focus on:** Architecture, scalability, performance

```
Title: "Entity Component System Architecture"
Description: "Data-oriented design implementation for high-performance gameplay. 
             Supports 10,000+ entities with multi-threaded update loops."
Problem: "GameObject-based architecture couldn't handle large entity counts"
Tech: ['Custom C++', 'Memory Pooling', 'Job System', 'Cache Optimization']
```

### Tools Development

**Focus on:** Workflow improvement, designer empowerment

```
Title: "Visual Quest Editor"
Description: "Custom Unity editor for creating quest chains with visual node graph. 
             Includes real-time validation and in-editor testing."
Problem: "Designers needed to create quests without programmer bottlenecks"
Tech: ['Unity Editor', 'C#', 'GraphView API', 'ScriptableObjects']
```

### Graphics/Rendering

**Focus on:** Visual quality, optimization techniques

```
Title: "Volumetric Fog System"
Description: "Real-time volumetric fog with light scattering and density variation. 
             Optimized using ray marching with adaptive step sizes."
Problem: "Achieving atmospheric fog without tanking performance on mid-range GPUs"
Tech: ['Unity URP', 'HLSL', 'Compute Shaders', 'Ray Marching']
```

---

## 🚫 Common Mistakes to Avoid

### 1. Too Vague
❌ "Made a good inventory system"
✅ "Grid-based inventory with drag-drop, auto-sorting, and equipment loadouts"

### 2. Not Technical Enough
❌ "Used Unity"
✅ "Unity with ECS, Job System for parallel physics, and custom compute shaders"

### 3. No Metrics
❌ "Improved performance"
✅ "Reduced frame time by 40% through object pooling and LOD system"

### 4. Feature Lists Instead of Solutions
❌ "Has jumping, shooting, and running"
✅ "Implemented responsive movement with coyote time and input buffering for tight controls"

### 5. Overly Complex
❌ "Architected a polymorphic singleton factory pattern with abstract interfaces..."
✅ "Used object pooling to eliminate runtime allocations during combat"

---

## 💡 Keywords That Resonate with Recruiters

### Architecture
- Modular design
- Data-driven
- Scalable
- Maintainable
- Component-based
- ECS (Entity Component System)

### Performance
- Optimization
- Profiling
- Memory management
- Cache-friendly
- Multi-threaded
- 60 FPS target

### Quality
- Robust
- Tested
- Production-ready
- Edge cases handled
- Error handling
- Debugging tools

### Teamwork
- Designer-friendly
- Tool development
- Documentation
- Code review
- Version control
- Agile/Scrum

---

## ✅ Before-and-After Example

### ❌ Before (Weak)
```typescript
{
  title: 'Game AI',
  description: 'Made enemies smarter',
  problem: 'AI was bad',
  techStack: ['Unity'],
  // No case study
}
```

### ✅ After (Strong)
```typescript
{
  title: 'Tactical AI System with Dynamic Difficulty',
  description: 'Behavior tree-based AI supporting squad tactics, cover usage, and flanking. 
               Adjusts difficulty based on player performance analytics.',
  problem: 'Creating challenging AI that adapts to player skill without feeling cheap or unfair',
  techStack: ['Unity 2022.3', 'C#', 'Behavior Trees', 'NavMesh', 'A* Pathfinding'],
  caseStudy: {
    goals: [
      'AI should use cover effectively and coordinate with allies',
      'Support 15+ AI agents at 60 FPS on target hardware',
      'Adapt difficulty without frustrating skilled or casual players'
    ],
    challenges: [
      'Pathfinding to cover positions caused frame drops',
      'AI became predictable after players learned patterns',
      'Hard to balance for different player skill levels'
    ],
    solutions: [
      'Implemented hierarchical task network with utility-based scoring',
      'Used NavMesh with runtime cover point caching',
      'Added weighted randomization to decision-making',
      'Built telemetry system tracking player combat metrics',
      'Created difficulty profiles that adjust AI reaction time and accuracy'
    ]
  }
}
```

---

## 🎯 Quick Checklist

For each project, ask yourself:

- [ ] Can a recruiter understand what this does in 5 seconds?
- [ ] Did I use specific numbers/metrics?
- [ ] Is my tech stack specific (not just "Unity")?
- [ ] Does the problem explain WHY it was needed?
- [ ] Are solutions technical but readable?
- [ ] Would this impress a senior programmer?
- [ ] Does it show problem-solving, not just features?

---

**Remember:** Show your thinking process, not just what you built. Recruiters want to see **how you solve problems**.
