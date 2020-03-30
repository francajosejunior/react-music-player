import React from 'react'
import ReactTable, { ReactTableDefaults } from 'react-table'
import 'react-table/react-table.css'
import Pagination from './Pagination'

const NullComponent = () => null
Object.assign(ReactTableDefaults, { NoDataComponent: NullComponent })

const Table = ({
  data,
  clickable,
  onPaginationHandle,
  rowsLimit,
  total,
  loading,
  handleInteraction,
  columns,
  page,
  ...newProps
}) => {
  return (
    <>
      <ReactTable
        data={data}
        loading={loading}
        NoDataComponent={NullComponent}
        manual
        onFetchData={handleInteraction}
        showPagination={false}
        // filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        pageSize={25}
        sortable={true}
        resizable={false}
        loadingText="Carregando dados"
        className={`-striped -highlight ${clickable ? 'clickable' : ''}`}
        style={{
          minHeight: 420
        }}
        {...newProps}
        columns={columns}
      />
      <Pagination
        total={total}
        rowsLimit={rowsLimit}
        onClick={onPaginationHandle}
        disabled={loading}
        page={page}
      />
    </>
  )
}

export default React.memo(Table)
