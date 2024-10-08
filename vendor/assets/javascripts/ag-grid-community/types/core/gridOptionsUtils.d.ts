import type { DomLayoutType, FillHandleOptions, GetRowIdFunc, GroupSelectionMode, IsRowSelectable, MultiRowSelectionOptions, RowSelectionOptions, SelectionOptions, SingleRowSelectionOptions } from './entities/gridOptions';
import type { ExtractParamsFromCallback, ExtractReturnTypeFromCallback, GridOptionsService } from './gridOptionsService';
import type { GetGroupAggFilteringParams, GetGroupIncludeFooterParams } from './interfaces/iCallbackParams';
import type { WithoutGridCommon } from './interfaces/iCommon';
import type { IRowNode } from './interfaces/iRowNode';
export declare function _isClientSideRowModel(gos: GridOptionsService): boolean;
export declare function _isServerSideRowModel(gos: GridOptionsService): boolean;
export declare function _isDomLayout(gos: GridOptionsService, domLayout: DomLayoutType): boolean;
export declare function _isRowSelection(gos: GridOptionsService): boolean;
export declare function _useAsyncEvents(gos: GridOptionsService): boolean;
export declare function _isGetRowHeightFunction(gos: GridOptionsService): boolean;
export declare function _shouldMaintainColumnOrder(gos: GridOptionsService, isPivotColumns: boolean): boolean;
export declare function _getRowHeightForNode(gos: GridOptionsService, rowNode: IRowNode, allowEstimate?: boolean, defaultRowHeight?: number): {
    height: number;
    estimated: boolean;
};
export declare function _getRowHeightAsNumber(gos: GridOptionsService): number;
export declare function _getDomData(gos: GridOptionsService, element: Node | null, key: string): any;
export declare function _setDomData(gos: GridOptionsService, element: Element, key: string, value: any): any;
export declare function _getDocument(gos: GridOptionsService): Document;
export declare function _getWindow(gos: GridOptionsService): Window & typeof globalThis;
export declare function _getRootNode(gos: GridOptionsService): Document | ShadowRoot;
export declare function _getActiveDomElement(gos: GridOptionsService): Element | null;
export declare function _isNothingFocused(gos: GridOptionsService): boolean;
export declare function _isAnimateRows(gos: GridOptionsService): NonNullable<boolean | undefined>;
export declare function _isGroupRowsSticky(gos: GridOptionsService): boolean;
export declare function _isColumnsSortingCoupledToGroup(gos: GridOptionsService): boolean;
export declare function _getGroupAggFiltering(gos: GridOptionsService): ((params: WithoutGridCommon<GetGroupAggFilteringParams>) => boolean) | undefined;
export declare function _getGrandTotalRow(gos: GridOptionsService): 'top' | 'bottom' | undefined;
export declare function _getGroupTotalRowCallback(gos: GridOptionsService): (params: WithoutGridCommon<GetGroupIncludeFooterParams>) => 'top' | 'bottom' | undefined;
export declare function _isGroupMultiAutoColumn(gos: GridOptionsService): NonNullable<boolean | undefined>;
export declare function _isGroupUseEntireRow(gos: GridOptionsService, pivotMode: boolean): boolean;
export declare function _getRowIdCallback<TData = any>(gos: GridOptionsService): ((params: WithoutGridCommon<ExtractParamsFromCallback<GetRowIdFunc<TData>>>) => ExtractReturnTypeFromCallback<GetRowIdFunc<TData>>) | undefined;
/** Get the selection checkbox configuration. Defaults to enabled. */
export declare function _getCheckboxes(selection: SelectionOptions): NonNullable<SingleRowSelectionOptions['checkboxes']> | NonNullable<MultiRowSelectionOptions['checkboxes']>;
/** Get the header checkbox configuration. Defaults to enabled in `multiRow`, otherwise disabled. */
export declare function _getHeaderCheckbox(selection: SelectionOptions): boolean;
/** Get the display configuration for disabled checkboxes. Defaults to displaying disabled checkboxes. */
export declare function _getHideDisabledCheckboxes(selection: SelectionOptions): boolean;
export declare function _isUsingNewSelectionAPI(gos: GridOptionsService): boolean;
export declare function _getSuppressMultiRanges(gos: GridOptionsService): boolean;
export declare function _isCellSelectionEnabled(gos: GridOptionsService): boolean;
export declare function _isRangeHandleEnabled(gos: GridOptionsService): boolean;
export declare function _isFillHandleEnabled(gos: GridOptionsService): boolean;
export declare function _getFillHandle(gos: GridOptionsService): FillHandleOptions | undefined;
export declare function _getEnableSelection(gos: GridOptionsService): boolean;
export declare function _getEnableDeselection(gos: GridOptionsService): boolean;
export declare function _getIsRowSelectable(gos: GridOptionsService): IsRowSelectable | undefined;
export declare function _getRowSelectionMode(gos: GridOptionsService): RowSelectionOptions['mode'] | undefined;
export declare function _isMultiRowSelection(gos: GridOptionsService): boolean;
export declare function _getEnableMultiSelectWithClick(gos: GridOptionsService): boolean;
export declare function _getGroupSelection(gos: GridOptionsService): GroupSelectionMode | undefined;
export declare function _getGroupSelectsDescendants(gos: GridOptionsService): boolean;
export declare function _isSetFilterByDefault(gos: GridOptionsService): boolean;
