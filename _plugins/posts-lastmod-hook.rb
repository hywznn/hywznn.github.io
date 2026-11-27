# Record the most recent revision of posts with multiple commits.
require "open3"

Jekyll::Hooks.register :posts, :post_init do |post|
  source = post.site.source
  next unless File.exist?(File.join(source, ".git"))

  history, status = Open3.capture2("git", "-C", source, "log", "-2", "--format=%aI", "--", post.path)
  revisions = history.lines
  post.data["last_modified_at"] = revisions.first.strip if status.success? && revisions.length > 1
end
