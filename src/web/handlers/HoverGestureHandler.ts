import { State } from '../../../src/State';
import { AdaptedEvent, Config } from '../interfaces';
import GestureHandlerOrchestrator from '../tools/GestureHandlerOrchestrator';
import GestureHandler from './GestureHandler';

export default class HoverGestureHandler extends GestureHandler {
  public init(ref: number, propsRef: React.RefObject<unknown>) {
    super.init(ref, propsRef);
  }

  public updateGestureConfig({ enabled = true, ...props }: Config): void {
    super.updateGestureConfig({ enabled: enabled, ...props });
  }

  protected transformNativeEvent() {
    const rect: DOMRect = this.view.getBoundingClientRect();

    return {
      x: this.tracker.getLastAvgX() - rect.left,
      y: this.tracker.getLastAvgY() - rect.top,
      absoluteX: this.tracker.getLastAvgX(),
      absoluteY: this.tracker.getLastAvgY(),
    };
  }

  protected onPointerMoveOver(event: AdaptedEvent): void {
    GestureHandlerOrchestrator.getInstance().recordHandlerIfNotPresent(this);

    this.tracker.addToTracker(event);
    super.onPointerMoveOver(event);

    if (this.getState() === State.UNDETERMINED) {
      this.begin();
      this.activate();
    }
  }

  protected onPointerMoveOut(event: AdaptedEvent): void {
    this.tracker.addToTracker(event);
    super.onPointerMoveOut(event);

    this.end();
  }

  protected onPointerMove(event: AdaptedEvent): void {
    this.tracker.track(event);
    super.onPointerMove(event);
  }

  protected onPointerCancel(event: AdaptedEvent): void {
    super.onPointerCancel(event);
    this.reset();
  }
}
