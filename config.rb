###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###
activate :directory_indexes
set :relative_links, true
activate :asset_hash

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  blog.permalink = "{year}{month}{day}-{title}.html"
  # Matcher for blog source files
  blog.sources = "articles/{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "layouts/article_layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  # blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false
# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
helpers do
  def find_article_by_title(title)
    blog.articles.find do |article|
      article.title.downcase.match title.downcase
    end
  end

  def article_image_with_link_inner(image_path, image_alt = nil)
    link_to image_path, target: '_blank' do
      image_tag image_path, alt: image_alt
    end
  end

  def article_image_with_link(image_path, alt: nil, caption: nil, float: :right)
    partial 'shared/article_image_with_link', locals: { image_path: image_path, alt: alt, caption: caption, float: float }
  end

  def published_articles
    if app.environment == :production
      blog.articles.select { |article| article.date <= Date.today }
    else
      blog.articles
    end
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

activate :deploy do |deploy|
  deploy.deploy_method   = :sftp
  deploy.host            = 'kidneydonationdiary.com'
  deploy.port            = 22
  deploy.path            = "/home/#{ENV['KDD_DEPLOY_USER']}/kidneydonationdiary.com"
  deploy.user            = ENV['KDD_DEPLOY_USER']
  deploy.password        = ENV['KDD_DEPLOY_PASS']
end
