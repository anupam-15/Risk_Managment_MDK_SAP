import { IControl } from 'mdk-core/controls/IControl';
import { BaseObservable } from 'mdk-core/observables/BaseObservable';
import { GridLayout, Image, Label, StackLayout } from '@nativescript/core';

export class GalleryControl extends IControl {
    private _observable: BaseObservable;
    private _galleryView: GridLayout;

    public initialize(props) {
        super.initialize(props);
        this._galleryView = new GridLayout();
        this._galleryView.columns = '*,*';
        this._galleryView.padding = 10;
        this._galleryView.rowSpacing = 10;
        this._galleryView.columnSpacing = 10;

        const galleryItems = this.definition().data.ExtensionProperties.items || [];

        galleryItems.forEach((item, index) => {
            const col = index % 2;
            const row = Math.floor(index / 2);
            this._galleryView.addRow(new ItemSpec(1, 'auto'));

            const layout = new StackLayout();
            layout.orientation = 'vertical';
            layout.padding = 5;

            const image = new Image();
            image.src = item.image;
            image.height = 120;
            image.stretch = 'aspectFill';

            const label = new Label();
            label.text = item.label;
            label.textAlignment = 'center';
            label.marginTop = 5;

            layout.addChild(image);
            layout.addChild(label);

            this._galleryView.addChild(layout);
            GridLayout.setRow(layout, row);
            GridLayout.setColumn(layout, col);
        });
    }

    public view() {
        return this._galleryView;
    }

    public viewIsNative() {
        return true;
    }

    public observable() {
        if (!this._observable) {
            this._observable = new BaseObservable(this, this.definition(), this.page());
        }
        return this._observable;
    }

    public setContainer(container: IControl) {
        // Do nothing
    }

    public setValue(value: any, notify: boolean, isTextValue?: boolean): Promise<any> {
        return Promise.resolve();
    }
}
