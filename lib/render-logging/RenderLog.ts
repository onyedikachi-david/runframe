export type RenderEvent = {
  type:
    | `renderable:renderLifecycle:${string}:start`
    | `renderable:renderLifecycle:${string}:end`
  /**
   * Corresponds to the element that was rendered
   */
  renderId: string
  eventsProcessed: number
  createdAt: number
}

export interface RenderLog {
  lastRenderEvent?: RenderEvent
  eventsProcessed?: number
  progress?: number

  renderEvents?: RenderEvent[]

  // Not sure if we can do this because of async
  phaseTimings?: Record<string, number>
}
