
const KEY = 'portfolio_memory_v1'

export function loadMemory(){
  return JSON.parse(localStorage.getItem(KEY) || '{}')
}
export function saveMemory(m){
  localStorage.setItem(KEY, JSON.stringify(m))
}
export function startSession(m){
  m.visitCount = (m.visitCount||0)+1
}
