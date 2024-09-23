# ag-grid-community-rails [![Gem Version](https://badge.fury.io/rb/ag-grid-community-rails.png)](http://badge.fury.io/rb/ag-grid-community-rails)

ag-grid-community-rails provides the [ag-grid/ag-grid](https://github.com/ag-grid/ag-grid/)
plugin as a Rails engine to use it within the asset pipeline.

# AG Grid

AG Grid is a fully-featured and highly customizable JavaScript data grid.
It delivers [outstanding performance](https://www.ag-grid.com/example?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github), has no third-party dependencies and [integrates smoothly with all major JavaScript frameworks](https://www.ag-grid.com/javascript-data-grid/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github).

This is a fork from [an earlier version](https://github.com/bjevanchiu/ag-grid-community-rails) which appears to now be dormant (having last been updated to ag-grid version 28). This fork has started at version 32.

## Installation

Add this to your Gemfile:

```ruby
gem "ag-grid-community-rails"
```

and run `bundle install`.

## Usage

In your `application.js`, include the following:

```js
//= require ag-grid-community/ag-grid-community
```

## Examples

See the [demo page](https://www.ag-grid.com/example) for examples how to use the plugin

## License

* The [ag-grid/ag-grid](https://github.com/ag-grid/ag-grid/) is licensed under the
[MIT License](http://opensource.org/licenses/mit-license.html)
* The [ag-grid-community-rails](https://github.com/bjevanchiu/ag-grid-community-rails) project is
 licensed under the [MIT License](http://opensource.org/licenses/mit-license.html)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
