
import { loadMemory, saveMemory } from './memory'

export function getReply(msg){
  const m = loadMemory()
  const t = msg.toLowerCase()

  let reply =
    t.includes('experience') ?
      'I work on scalable frontend systems using React, TypeScript, and strong UI architecture.' :
    t.includes('project') ?
      'My projects focus on performance, reusability, and real production impact.' :
    t.includes('skill') ?
      'React, JavaScript, TypeScript, frontend architecture, accessibility.' :
      'I focus on portfolio-related topics like experience, projects, and frontend skills.'

  m.lastTopic = t.includes('experience')?'experience':m.lastTopic
  saveMemory(m)
  return reply
}
